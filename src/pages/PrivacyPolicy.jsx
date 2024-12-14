import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 py-24">
      <div className="container mx-auto px-5 lg:px-20">
        <h1 className="lg:text-4xl text-2xl font-bold text-gray-800 mb-6 text-center">
          Privacy Policy
        </h1>
        <div className="bg-white shadow-lg rounded-lg p-6 lg:p-10">
          {/* Privacy Commitment */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Wiki Job's Privacy Commitment Overview
            </h2>
            <p className="text-gray-600 leading-7 mb-4">
              Wiki Job is committed to protecting the privacy of our users. We
              strive to provide a safe, secure user experience. This Privacy
              Policy outlines the online data collection and usage policies and
              practices that apply to this website. The following statement
              explains Wiki Job's commitment to managing your personal
              information and sets out how and when personal information is
              collected, used, shared, and secured, as well as your choices
              regarding the use, access, and correction of your personal
              information.
            </p>
            <p className="text-gray-600 leading-7 mb-4">
              By using this website or application, you agree to the
              collection, use, and transfer of your data as described in this
              Privacy Policy. You may revoke your consent to this policy. If
              you revoke your consent, your account and profile information
              will be removed from our website.
            </p>
          </section>

          {/* Scope of Policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Scope of this Policy
            </h2>
            <p className="text-gray-600 leading-7 mb-4">
              This Policy applies to{" "}
              <a
                href="https://Wikijob.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-600 underline"
              >
                https://Wikijob.in/
              </a>{" "}
              (the "Website"), which is operated under Wiki Job (India) Private
              Limited ("Company" / "We" / "Our"). It is the Company's policy to
              comply with data protection legislation. This Policy also applies
              to the WAP (mobile version) of the Website and other mobile
              applications in which the Site operates.
            </p>
          </section>

          {/* Information Collection */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Information We Collect and Retain
            </h2>
            <p className="text-gray-600 leading-7 mb-4">
              We collect information about you when you use our sites and
              applications. This includes:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Your contact information like name, email address, postal address, and phone number</li>
              <li>Your resume including job experience</li>
              <li>
                Information used to apply to jobs on{" "}
                <a
                  href="https://Wikijob.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 underline"
                >
                  https://Wikijob.in/
                </a>
              </li>
              <li>Information imported from third-party applications</li>
              <li>Your race, ethnicity, or gender (optional)</li>
              <li>Information about your business (e.g., company name, size, and type)</li>
            </ul>
            <p className="text-gray-600 leading-7 mb-4">
              You can correct or remove this information by accessing your
              account settings.
            </p>
          </section>

          {/* Publicly Available Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Collection and Use of Publicly Available Online Job Information
            </h2>
            <p className="text-gray-600 leading-7 mb-4">
              We collect job-related information from publicly available online
              sources for display purposes. Users are redirected to the original
              source of the job posting. We do not verify the authenticity or
              accuracy of this information. Use this information at your own
              discretion.
            </p>
          </section>

          {/* Referrals */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Referrals
            </h2>
            <p className="text-gray-600 leading-7 mb-4">
              If you use our service to share content with others, we may
              collect personal information about them (e.g., their name and
              email). This information is used solely for sending a one-time
              email invitation.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
