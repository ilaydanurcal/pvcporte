# EmailJS Kurulum Rehberi

Bu rehber, iletişim formunun `info@pvcporte.com` adresine e-posta göndermesi için EmailJS kurulumunu açıklar.

## Adım 1: EmailJS Hesabı Oluşturma

1. https://www.emailjs.com/ adresine gidin
2. "Sign Up" butonuna tıklayın
3. Ücretsiz hesap oluşturun (e-posta ile kayıt olun)
4. E-posta adresinize gelen doğrulama linkine tıklayın

## Adım 2: Email Service Ekleme

1. EmailJS dashboard'a giriş yapın
2. Sol menüden **"Email Services"** seçeneğine tıklayın
3. **"Add New Service"** butonuna tıklayın
4. E-posta sağlayıcınızı seçin (Gmail, Outlook, vb.)
5. Gmail için:
   - Gmail hesabınızla bağlantı kurun
   - İzinleri onaylayın
6. Service oluşturulduktan sonra **Service ID**'yi kopyalayın (örnek: `service_xxxxx`)

## Adım 3: Email Template Oluşturma

1. Sol menüden **"Email Templates"** seçeneğine tıklayın
2. **"Create New Template"** butonuna tıklayın
3. Template'i şu şekilde yapılandırın:

### Template Ayarları:

**To Email:**
```
{{to_email}}
```

**From Name:**
```
{{from_name}}
```

**From Email:**
```
{{from_email}}
```

**Reply To:**
```
{{reply_to}}
```

**Subject:**
```
Yeni İletişim Formu - {{from_name}}
```

**Content (HTML):**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #8B5E3C; color: white; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #8B5E3C; }
        .value { margin-top: 5px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>Yeni İletişim Formu Mesajı</h2>
        </div>
        <div class="content">
            <div class="field">
                <div class="label">Ad Soyad:</div>
                <div class="value">{{from_name}}</div>
            </div>
            <div class="field">
                <div class="label">E-posta:</div>
                <div class="value">{{from_email}}</div>
            </div>
            <div class="field">
                <div class="label">Telefon:</div>
                <div class="value">{{phone}}</div>
            </div>
            <div class="field">
                <div class="label">Şirket:</div>
                <div class="value">{{company}}</div>
            </div>
            <div class="field">
                <div class="label">Ülke:</div>
                <div class="value">{{country}}</div>
            </div>
            <div class="field">
                <div class="label">PVC Kapı Modeli:</div>
                <div class="value">{{product_type}}</div>
            </div>
            <div class="field">
                <div class="label">Miktar:</div>
                <div class="value">{{quantity}}</div>
            </div>
            <div class="field">
                <div class="label">Mesaj:</div>
                <div class="value">{{message}}</div>
            </div>
        </div>
    </div>
</body>
</html>
```

4. Template'i kaydedin
5. **Template ID**'yi kopyalayın (örnek: `template_xxxxx`)

## Adım 4: Public Key Alma

1. Sol menüden **"Account"** > **"General"** seçeneğine gidin
2. **"Public Key"** bölümünden Public Key'inizi kopyalayın (örnek: `xxxxxxxxxxxxx`)

## Adım 5: Kod Yapılandırması

1. `src/app/services/email.service.ts` dosyasını açın
2. Şu satırları bulun:
   ```typescript
   private readonly SERVICE_ID = 'YOUR_SERVICE_ID';
   private readonly TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
   private readonly PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
   ```
3. Bu değerleri EmailJS'den aldığınız değerlerle değiştirin:
   ```typescript
   private readonly SERVICE_ID = 'service_xxxxx'; // Adım 2'den aldığınız Service ID
   private readonly TEMPLATE_ID = 'template_xxxxx'; // Adım 3'ten aldığınız Template ID
   private readonly PUBLIC_KEY = 'xxxxxxxxxxxxx'; // Adım 4'ten aldığınız Public Key
   ```

## Adım 6: Test Etme

1. Uygulamayı çalıştırın: `ng serve`
2. İletişim sayfasına gidin
3. Formu doldurun ve gönderin
4. `info@pvcporte.com` adresine e-posta gelip gelmediğini kontrol edin

## Sorun Giderme

### E-posta gelmiyorsa:
- EmailJS dashboard'da "Activity" sekmesinden gönderim durumunu kontrol edin
- Service ve Template ID'lerin doğru olduğundan emin olun
- Gmail kullanıyorsanız, spam klasörünü kontrol edin
- EmailJS ücretsiz planında aylık 200 e-posta limiti vardır

### Hata mesajları:
- Console'da (F12) hata mesajlarını kontrol edin
- EmailJS ayarlarının doğru yapılandırıldığından emin olun

## Önemli Notlar

- EmailJS ücretsiz planında aylık 200 e-posta gönderebilirsiniz
- Daha fazla e-posta için ücretli plana geçebilirsiniz
- Public Key güvenli bir şekilde saklanmalıdır (production'da environment variable kullanın)

## Yardım

EmailJS dokümantasyonu: https://www.emailjs.com/docs/


