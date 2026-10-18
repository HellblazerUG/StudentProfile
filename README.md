# StudentProfile — Expo React Native

## გაშვება

1. დააინსტალირეთ Node.js LTS.
2. ტერმინალში გადადით პროექტის საქაღალდეში.
3. გაუშვით:

```bash
npm install
npm install @react-navigation/native @react-navigation/native-stack
npx expo install react-native-screens react-native-safe-area-context
npx expo start
```

პროექტში `node_modules` განზრახ არ არის ჩართული. `npm install` მას ავტომატურად შექმნის.

## ეკრანები
- მთავარი გვერდი: სტუდენტის სახელი, TextInput, useState და TouchableOpacity.
- ინფორმაციის გვერდი: Image, სტუდენტის ტექსტური ინფორმაცია და მთავარ გვერდზე დაბრუნების ღილაკი.
- ეკრანებს შორის გადასვლა ხდება React Navigation Native Stack-ით.
