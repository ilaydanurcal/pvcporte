import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  /**
   * EmailJS Yapılandırması
   * 
   * Kurulum için EMAILJS_KURULUM.md dosyasına bakın.
   * 
   * 1. https://www.emailjs.com/ adresinden ücretsiz hesap oluşturun
   * 2. Email Service ekleyin ve Service ID'yi kopyalayın
   * 3. Email Template oluşturun ve Template ID'yi kopyalayın
   * 4. Account > General'dan Public Key'i kopyalayın
   * 5. Aşağıdaki değerleri güncelleyin
   */
  private readonly SERVICE_ID = 'YOUR_SERVICE_ID'; // Örnek: 'service_abc123'
  private readonly TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Örnek: 'template_xyz789'
  private readonly PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Örnek: 'abcdefghijklmnop'

  constructor() {
    // EmailJS'i başlat
    if (this.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
      emailjs.init(this.PUBLIC_KEY);
    }
  }

  async sendContactForm(formData: {
    fullName: string;
    company?: string;
    country?: string;
    email: string;
    phone: string;
    productType: string;
    quantity?: string;
    message?: string;
  }): Promise<{ success: boolean; message: string }> {
    try {
      const templateParams = {
        to_email: 'info@pvcporte.com',
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company || 'Belirtilmemiş',
        country: formData.country || 'Belirtilmemiş',
        product_type: formData.productType,
        quantity: formData.quantity || 'Belirtilmemiş',
        message: formData.message || 'Mesaj yok',
        reply_to: formData.email
      };

      // EmailJS ayarları kontrolü
      if (this.SERVICE_ID === 'YOUR_SERVICE_ID' || this.TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || this.PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
        console.warn('EmailJS ayarları yapılandırılmamış. Lütfen email.service.ts dosyasındaki ayarları güncelleyin.');
        return {
          success: false,
          message: 'E-posta servisi yapılandırılmamış. Lütfen yöneticiye başvurun.'
        };
      }

      const response: EmailJSResponseStatus = await emailjs.send(
        this.SERVICE_ID,
        this.TEMPLATE_ID,
        templateParams
      );

      if (response.status === 200) {
        return {
          success: true,
          message: 'E-posta başarıyla gönderildi!'
        };
      } else {
        return {
          success: false,
          message: 'E-posta gönderilirken bir hata oluştu.'
        };
      }
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      return {
        success: false,
        message: error.text || 'E-posta gönderilirken bir hata oluştu. Lütfen tekrar deneyin.'
      };
    }
  }
}

