import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Privacy Policy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Privacy Policy" />
        <hr />
        <div className="privacy-policy">
          <p>
            This is the privacy policy text. Please review our privacy policy to understand how we collect, use, and protect your personal information.
          </p>

          <h2>Privacy Policy for Watchify</h2>

          <p>
            Last updated: 24/11/2023
          </p>

          <p>
            This Privacy Policy describes how Watchify ("we," "us," or "our") collects, uses, and shares information when you use our mobile application "Watchify" (the "App"). By using the App, you agree to the terms and conditions outlined in this Privacy Policy.
          </p>

          <h3>Information We Collect</h3>

          <h4>Personal Information</h4>
          <p>
            We may collect certain personally identifiable information, including but not limited to:
          </p>
          <ul>
            <li>Account Information: When you create an account with Watchify, we collect your username, email address, and password.</li>
            <li>Usage Data: We may collect information on how you use the App, such as your watch history, preferences, and interactions with the App.</li>
          </ul>

          <h4>Non-Personal Information</h4>
          <p>
            We may also collect non-personal information that does not directly identify you. This includes:
          </p>
          <ul>
            <li>Device Information: We collect information about the device you use to access the App, such as the device type, operating system, and unique device identifiers.</li>
            <li>Log Data: We automatically collect log information when you use the App, including your IP address, browser type, and the pages you visit.</li>
          </ul>

          <h3>How We Use Your Information</h3>
          <p>
            We use the collected information for the following purposes:
          </p>
          <ul>
            <li>To provide and maintain the App.</li>
            <li>To improve, personalize, and optimize the App.</li>
            <li>To analyze usage patterns and trends.</li>
            <li>To send you updates, notifications, and promotional messages related to the App.</li>
          </ul>

          <h3>Information Sharing</h3>
          <p>
            We may share your information with third parties only in the following circumstances:
          </p>
          <ul>
            <li>With your consent.</li>
            <li>To comply with legal obligations.</li>
            <li>To protect and defend our rights and property.</li>
          </ul>

          <h3>Security</h3>
          <p>
            We take reasonable measures to protect your personal information from unauthorized access or disclosure.
          </p>

          <h3>Children's Privacy</h3>
          <p>
            Watchify is intended for users above the age of 13. We do not knowingly collect personal information from children under 13. If you believe that we have collected information from a child under 13, please contact us immediately.
          </p>

          <h3>Changes to This Privacy Policy</h3>
          <p>
            We reserve the right to update our Privacy Policy. Any changes will be effective upon posting the revised policy on the App.
          </p>

          <h3>Contact Us</h3>
          <p>If you have any questions or concerns about our Privacy Policy, please contact us at [your contact email].</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
