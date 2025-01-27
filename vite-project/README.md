# Prayer Times Website

A responsive web application that displays daily prayer times based on the user's city input. Built with **React.js** and integrated with the **Aladhan Prayer Times API** for accurate and reliable data.

---

## Features

- **City-Based Prayer Times:** Users can search for prayer times by entering their city.
- **Responsive Design:** Optimized for mobile and desktop devices.
- **API Integration:** Uses the Aladhan Prayer Times API to fetch accurate timings.
- **Error Handling:** Displays meaningful messages for invalid inputs or API issues.
- **Clean UI:** Minimalistic and user-friendly design.

---

## Technologies Used

- **Frontend Framework:** React.js
- **Styling:** Tailwind CSS (or any CSS framework of your choice)
- **API:** [Aladhan Prayer Times API](https://aladhan.com/prayer-times-api)
- **HTTP Client:** Axios

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/asmaaMahmoudF/prayers_api.git
   cd prayer-times-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open the app in your browser:
   ```
   http://localhost:3000
   ```

---

## API Integration

- The app fetches prayer times from the Aladhan Prayer Times API based on the city name entered by the user.
- API endpoint used:
  ```
  https://api.aladhan.com/v1/timingsByCity?city={CITY}&method=2
  ```

---

## Project Structure

```
prayer-times-website/
├── public/
├── src/
│   ├── components/
│   │   ├── InputField.jsx
│   │   ├── PrayerTimesCard.jsx
│   ├── App.js
│   ├── index.js
├── package.json
```

- **`components/`**: Contains reusable components like the input field and prayer times card.
- **`App.js`**: Main application logic and state management.

---

## Usage

1. Enter the name of your city in the input field.
2. Click the "Get Times" button.
3. View the prayer times displayed for your city.

---

## Future Enhancements

- **Geolocation Support:** Automatically detect user's location for prayer times.
- **Dark Mode:** Add a theme toggle for better user experience.
- **Multi-language Support:** Provide translations for a wider audience.
- **Save Preferences:** Remember the last searched city for returning users.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

- [Aladhan Prayer Times API](https://aladhan.com/prayer-times-api) for providing accurate prayer timings.
- React.js community for excellent documentation and support.

---

## Contact

For questions or collaboration, feel free to reach out:
- **Email:** your-email@example.com
- **GitHub:** [asmaamahmoudF](https://github.com/asmaaMahmoudF/prayers_api)
