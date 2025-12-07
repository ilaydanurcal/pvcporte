import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { LanguageService } from '../../services/language.service';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  t: any;
  direction$: any;
  formData = {
    fullName: '',
    company: '',
    country: '',
    email: '',
    phone: '',
    productTypes: [] as string[],
    quantity: '',
    message: ''
  };
  isSuccess = false;

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private languageService: LanguageService,
    private i18nService: I18nService
  ) {
    this.direction$ = this.languageService.getDirection();
  }

  ngOnInit(): void {
    this.updateTranslations();
    this.languageService.getCurrentLanguage().subscribe(() => {
      this.updateTranslations();
      this.updateSEO();
    });
    this.updateSEO();
  }

  updateTranslations(): void {
    this.t = this.i18nService.getCurrentTranslation();
  }


  getPvcModels(): string[] {
    const models: string[] = [];
    for (let i = 1; i <= 26; i++) {
      models.push(`OS${i.toString().padStart(3, '0')}`);
    }
    return models;
  }
  
  getCurrentLanguage(): string {
    return this.languageService.getCurrentLanguageValue();
  }
  
  getSelectProductText(): string {
    const lang = this.getCurrentLanguage();
    const texts: Record<string, string> = {
      tr: 'Bir PVC kapı modeli seçin',
      en: 'Select a PVC door model',
      fr: 'Sélectionnez un modèle de porte PVC',
      ar: 'اختر موديل باب PVC'
    };
    return texts[lang] || texts['tr'];
  }

  onSubmit(contactForm: any): void {
    // En az bir PVC kapı modeli seçilmiş mi kontrol et
    if (this.formData.productTypes.length === 0) {
      contactForm.control.markAllAsTouched();
      return;
    }

    // E-posta konusu
    const lang = this.getCurrentLanguage();
    const subjectTexts: Record<string, string> = {
      tr: 'Yeni Teklif Talebi - OBSAN SUARL',
      en: 'New Quote Request - OBSAN SUARL',
      fr: 'Nouvelle Demande de Devis - OBSAN SUARL',
      ar: 'طلب عرض أسعار جديد - OBSAN SUARL'
    };
    const subject = encodeURIComponent(subjectTexts[lang] || subjectTexts['tr']);

    // E-posta içeriği (HTML formatında)
    const emailBody = this.formatEmailBody();
    // HTML içeriğini URL encode et
    const body = encodeURIComponent(emailBody);

    // mailto linki oluştur
    const mailtoLink = `mailto:info@pvcporte.com?subject=${subject}&body=${body}`;

    // E-posta istemcisini aç
    try {
      window.location.href = mailtoLink;
      
      // Formu başarılı olarak işaretle
      this.isSuccess = true;
      
      // Formu sıfırla
      setTimeout(() => {
        this.isSuccess = false;
        this.resetForm();
      }, 2000);
    } catch (error) {
      console.error('E-posta istemcisi açılamadı:', error);
      alert('E-posta istemcinizi açamadık. Lütfen manuel olarak info@pvcporte.com adresine e-posta gönderin.');
    }
  }

  formatEmailBody(): string {
    const lang = this.getCurrentLanguage();
    
    // Çok dilli etiketler
    const labels: Record<string, Record<string, string>> = {
      tr: {
        fullName: 'Ad Soyad',
        email: 'E-posta',
        phone: 'Telefon',
        company: 'Şirket',
        country: 'Ülke',
        productType: 'PVC Kapı Modelleri',
        quantity: 'Miktar',
        message: 'Mesaj'
      },
      en: {
        fullName: 'Full Name',
        email: 'Email',
        phone: 'Phone',
        company: 'Company',
        country: 'Country',
        productType: 'PVC Door Models',
        quantity: 'Quantity',
        message: 'Message'
      },
      fr: {
        fullName: 'Nom Complet',
        email: 'E-mail',
        phone: 'Téléphone',
        company: 'Entreprise',
        country: 'Pays',
        productType: 'Modèles de Porte PVC',
        quantity: 'Quantité',
        message: 'Message'
      },
      ar: {
        fullName: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        phone: 'الهاتف',
        company: 'الشركة',
        country: 'البلد',
        productType: 'موديلات باب PVC',
        quantity: 'الكمية',
        message: 'الرسالة'
      }
    };

    const currentLabels = labels[lang] || labels['tr'];

    // HTML formatında e-posta içeriği
    const productTypesList = this.formData.productTypes.length > 0 
      ? this.formData.productTypes.join(', ') 
      : 'Seçilmedi';

    // HTML e-posta içeriği
    const htmlBody = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .email-header {
            background: linear-gradient(135deg, #8B5E3C 0%, #6B4423 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }
        .email-header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 700;
        }
        .email-content {
            padding: 30px;
        }
        .info-row {
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 1px solid #e0e0e0;
        }
        .info-row:last-child {
            border-bottom: none;
        }
        .info-label {
            font-weight: 700;
            color: #8B5E3C;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 5px;
        }
        .info-value {
            font-size: 16px;
            color: #333;
            word-wrap: break-word;
        }
        .product-types {
            display: inline-block;
            background-color: #f8f8f8;
            padding: 8px 12px;
            border-radius: 4px;
            margin: 2px;
            font-size: 14px;
        }
        .message-box {
            background-color: #f8f8f8;
            padding: 15px;
            border-radius: 4px;
            border-left: 4px solid #8B5E3C;
            margin-top: 10px;
        }
        .email-footer {
            background-color: #f8f8f8;
            padding: 20px;
            text-align: center;
            font-size: 12px;
            color: #666;
            border-top: 1px solid #e0e0e0;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="email-header">
            <h1>YENİ TEKLİF TALEBİ</h1>
        </div>
        <div class="email-content">
            <div class="info-row">
                <div class="info-label">${currentLabels['fullName']}</div>
                <div class="info-value">${this.formData.fullName}</div>
            </div>
            <div class="info-row">
                <div class="info-label">${currentLabels['email']}</div>
                <div class="info-value">${this.formData.email}</div>
            </div>
            <div class="info-row">
                <div class="info-label">${currentLabels['phone']}</div>
                <div class="info-value">${this.formData.phone}</div>
            </div>
            ${this.formData.company && this.formData.company.trim() ? `
            <div class="info-row">
                <div class="info-label">${currentLabels['company']}</div>
                <div class="info-value">${this.formData.company}</div>
            </div>
            ` : ''}
            ${this.formData.country && this.formData.country.trim() ? `
            <div class="info-row">
                <div class="info-label">${currentLabels['country']}</div>
                <div class="info-value">${this.formData.country}</div>
            </div>
            ` : ''}
            <div class="info-row">
                <div class="info-label">${currentLabels['productType']}</div>
                <div class="info-value">
                    ${this.formData.productTypes.map(type => `<span class="product-types">${type}</span>`).join('')}
                </div>
            </div>
            ${this.formData.quantity && this.formData.quantity.trim() ? `
            <div class="info-row">
                <div class="info-label">${currentLabels['quantity']}</div>
                <div class="info-value">${this.formData.quantity}</div>
            </div>
            ` : ''}
            ${this.formData.message && this.formData.message.trim() ? `
            <div class="info-row">
                <div class="info-label">${currentLabels['message']}</div>
                <div class="message-box">${this.formData.message.replace(/\n/g, '<br>')}</div>
            </div>
            ` : ''}
        </div>
        <div class="email-footer">
            Bu mesaj OBSAN SUARL web sitesi iletişim formundan gönderilmiştir.
        </div>
    </div>
</body>
</html>
    `.trim();

    // Düz metin versiyonu (fallback için)
    let plainBody = '';
    plainBody += `═══════════════════════════════════════\n`;
    plainBody += `     YENİ TEKLİF TALEBİ\n`;
    plainBody += `═══════════════════════════════════════\n\n`;
    
    plainBody += `${currentLabels['fullName']}: ${this.formData.fullName}\n`;
    plainBody += `${currentLabels['email']}: ${this.formData.email}\n`;
    plainBody += `${currentLabels['phone']}: ${this.formData.phone}\n`;
    
    if (this.formData.company && this.formData.company.trim()) {
      plainBody += `${currentLabels['company']}: ${this.formData.company}\n`;
    }
    
    if (this.formData.country && this.formData.country.trim()) {
      plainBody += `${currentLabels['country']}: ${this.formData.country}\n`;
    }
    
    plainBody += `${currentLabels['productType']}: ${productTypesList}\n`;
    
    if (this.formData.quantity && this.formData.quantity.trim()) {
      plainBody += `${currentLabels['quantity']}: ${this.formData.quantity}\n`;
    }
    
    if (this.formData.message && this.formData.message.trim()) {
      plainBody += `\n${currentLabels['message']}:\n`;
      plainBody += `${this.formData.message}\n`;
    }

    plainBody += `\n═══════════════════════════════════════\n`;
    plainBody += `Bu mesaj OBSAN SUARL web sitesi iletişim formundan gönderilmiştir.\n`;
    plainBody += `═══════════════════════════════════════`;

    // HTML içeriğini döndür (mailto linkinde kullanılacak)
    return htmlBody;
  }

  resetForm(): void {
    this.formData = {
      fullName: '',
      company: '',
      country: '',
      email: '',
      phone: '',
      productTypes: [],
      quantity: '',
      message: ''
    };
  }

  toggleProductType(productType: string): void {
    const index = this.formData.productTypes.indexOf(productType);
    if (index > -1) {
      this.formData.productTypes.splice(index, 1);
    } else {
      this.formData.productTypes.push(productType);
    }
  }

  isProductTypeSelected(productType: string): boolean {
    return this.formData.productTypes.includes(productType);
  }

  updateSEO(): void {
    const lang = this.languageService.getCurrentLanguageValue();
    
    const titles: Record<string, string> = {
      tr: 'OBSAN SUARL | İletişim - Teklif Alın - Afrika Kapı İhracatı',
      en: 'OBSAN SUARL | Contact - Get Quote - Door Export to Africa',
      fr: 'OBSAN SUARL | Contact - Demander un Devis - Export de Portes vers l\'Afrique',
      ar: 'OBSAN SUARL | اتصل بنا - احصل على عرض أسعار - تصدير الأبواب إلى أفريقيا'
    };

    const descriptions: Record<string, string> = {
      tr: 'OBSAN SUARL ile iletişime geçin. Afrika\'ya kapı ihracatı için teklif alın. Projeniz için özel çözümler ve toptan kapı tedariki hakkında bilgi edinin.',
      en: 'Contact OBSAN SUARL. Get a quote for door export to Africa. Learn about custom solutions for your project and wholesale door supply.',
      fr: 'Contactez OBSAN SUARL. Obtenez un devis pour l\'export de portes vers l\'Afrique. Découvrez des solutions personnalisées pour votre projet et l\'approvisionnement en portes en gros.',
      ar: 'تواصل مع OBSAN SUARL. احصل على عرض أسعار لتصدير الأبواب إلى أفريقيا. تعرف على الحلول المخصصة لمشروعك وتوريد الأبواب بالجملة.'
    };

    this.titleService.setTitle(titles[lang] || titles['tr']);
    this.metaService.updateTag({ name: 'description', content: descriptions[lang] || descriptions['tr'] });
    this.metaService.updateTag({ property: 'og:title', content: titles[lang] || titles['tr'] });
    this.metaService.updateTag({ property: 'og:description', content: descriptions[lang] || descriptions['tr'] });
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.pvcporte.com/contact' });
  }
}
