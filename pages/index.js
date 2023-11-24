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
        <p className="privacy-policy">
          This is the privacy policy text. Please review our privacy policy to understand how we collect, use, and protect your personal information.
         Privacy Policy for Watchify

Last updated: 24/11/2023

This Privacy Policy describes how Watchify ("we," "us," or "our") collects, uses, and shares information when you use our mobile application "Watchify" (the "App"). By using the App, you agree to the terms and conditions outlined in this Privacy Policy.

Information We Collect
Personal Information
We may collect certain personally identifiable information, including but not limited to:

Account Information: When you create an account with Watchify, we collect your username, email address, and password.

Usage Data: We may collect information on how you use the App, such as your watch history, preferences, and interactions with the App.

Non-Personal Information
We may also collect non-personal information that does not directly identify you. This includes:

Device Information: We collect information about the device you use to access the App, such as the device type, operating system, and unique device identifiers.

Log Data: We automatically collect log information when you use the App, including your IP address, browser type, and the pages you visit.

How We Use Your Information
We use the collected information for the following purposes:

To provide and maintain the App.
To improve, personalize, and optimize the App.
To analyze usage patterns and trends.
To send you updates, notifications, and promotional messages related to the App.
Information Sharing
We may share your information with third parties only in the following circumstances:

With your consent.
To comply with legal obligations.
To protect and defend our rights and property.
Security
We take reasonable measures to protect your personal information from unauthorized access or disclosure.

Children's Privacy
Watchify is intended for users above the age of 13. We do not knowingly collect personal information from children under 13. If you believe that we have collected information from a child under 13, please contact us immediately.

Changes to This Privacy Policy
We reserve the right to update our Privacy Policy. Any changes will be effective upon posting the revised policy on the App.

Contact Us
If you have any questions or concerns about our Privacy Policy, please contact us at [your contact email].
        </p>
      </main>
      <Footer />
    </div>
  );
}
