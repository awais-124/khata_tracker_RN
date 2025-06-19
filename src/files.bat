@echo off
cd src

:: Create folder structure
mkdir assets\images
mkdir assets\fonts
mkdir components
mkdir constants
mkdir context
mkdir navigation
mkdir screens\auth
mkdir screens\debts
mkdir services

:: Create empty files in components
echo. > components\AuthForm.js
echo. > components\DebtCard.js
echo. > components\DebtFilter.js
echo. > components\DebtList.js
echo. > components\DebtSummary.js
echo. > components\LoadingIndicator.js
echo. > components\ThemeSwitcher.js

:: Create constants
echo. > constants\app.js
echo. > constants\theme.js

:: Create context
echo. > context\AuthContext.js
echo. > context\DebtContext.js

:: Navigation
echo. > navigation\AppNavigator.js

:: Screens - Auth
echo. > screens\auth\LoginScreen.js
echo. > screens\auth\RegisterScreen.js
echo. > screens\auth\ResetPasswordScreen.js

:: Screens - Debts
echo. > screens\debts\AddEditDebtScreen.js
echo. > screens\debts\DebtDetailScreen.js
echo. > screens\debts\DebtsScreen.js
echo. > screens\debts\HistoryScreen.js

:: Single screen
echo. > screens\SettingsScreen.js

:: Services
echo. > services\auth.js
echo. > services\debts.js

:: Main App file
echo. > App.js

echo Project structure created successfully.
pause
