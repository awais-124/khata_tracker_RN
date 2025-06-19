# Khata Tracker 💰 (React Native Edition)

[![React Native](https://img.shields.io/badge/React--Native-0.73-blue)](https://reactnative.dev)
[![Firebase](https://img.shields.io/badge/Firebase-11.0-orange)](https://firebase.google.com)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

A cross-platform debt management app built with **React Native** and **Firebase**. Track loans, credit, and payments seamlessly across Android and iOS.

---

## Features ✨

* 🔐 Secure authentication (Email + Google via Firebase)
* 📝 Record debts with full details (amount, date, witness)
* 🔍 Search & filter by person/status/date
* 📊 Monthly debt summaries
* 🎨 Light & dark theme switcher
* 📄 Export debt logs as PDF
* 🔔 Auto payment reminders via notifications

---

## Tech Stack 💪

* **Frontend**: React Native
* **Backend**: Firebase (Auth, Firestore)
* **Navigation**: React Navigation
* **Context API** for state management
* **Notifications**: `react-native-push-notification`
* **PDF Export**: `react-native-pdf`
* **UI**: React Native Paper + Vector Icons

---

## Installation 🚀

### Prerequisites

* Node.js & Yarn or npm
* React Native CLI environment setup
* Firebase account
* Android Studio / Xcode

### 1. Clone the Repository

```bash
git clone https://github.com/awais-124/khata-tracker-RN.git
cd khata-tracker-RN
```

### 2. Install Dependencies

Using npm:

```bash
npm install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context firebase @react-native-firebase/app @react-native-firebase/auth @react-native-firebase/firestore react-native-pdf react-native-vector-icons react-native-paper
```

### 3. Configure Firebase

* Create a Firebase project
* Enable **Email/Password** and **Google** sign-in
* Set up **Cloud Firestore** (start in test mode)
* Download `google-services.json` (Android) and `GoogleService-Info.plist` (iOS)


### 4. Run the App

```bash
npx react-native run-android   # for Android
yarn ios                      # for iOS (Mac only)
```

---

## Folder Structure 📂

```
src/
├── assets/
│   ├── images/
│   └── fonts/
├── components/
│   ├── AuthForm.js
│   ├── DebtCard.js
│   ├── DebtFilter.js
│   ├── DebtList.js
│   ├── DebtSummary.js
│   ├── LoadingIndicator.js
│   └── ThemeSwitcher.js
├── constants/
│   ├── app.js
│   └── theme.js
├── context/
│   ├── AuthContext.js
│   └── DebtContext.js
├── navigation/
│   └── AppNavigator.js
├── screens/
│   ├── auth/
│   │   ├── LoginScreen.js
│   │   ├── RegisterScreen.js
│   │   └── ResetPasswordScreen.js
│   ├── debts/
│   │   ├── AddEditDebtScreen.js
│   │   ├── DebtDetailScreen.js
│   │   ├── DebtsScreen.js
│   │   └── HistoryScreen.js
│   └── SettingsScreen.js
├── services/
│   ├── auth.js
│   └── debts.js
└── App.js
```

---

## Environment Variables 🔒

Create a `.env` file at the project root:

```env
FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
FIREBASE_PROJECT_ID=your_project_id
```


## Contributing 🤝

1. Fork the repo
2. Create a feature branch
3. Commit & push your changes
4. Open a Pull Request

---


## Questions?

Open an issue or contact [@awais-124](https://github.com/awais-124)
