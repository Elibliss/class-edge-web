import { useState } from 'react';
import termsDoc from '../assets/Class Edge Terms Of Service.docx';

export default function TermsOfServiceModal({ open, onClose }) {
  const [agreed, setAgreed] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 px-4">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden">
        <div className="px-6 py-4 border-b">
          <h2 className="text-lg font-bold text-gray-900">Terms of Service</h2>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-sm text-gray-600">
            Please review our Terms of Service below. If the document does not render in your browser,
            you can download it using the link provided.
          </p>

          <div className="rounded-lg border border-gray-200">
            <div className="h-64 md:h-80 w-full bg-gray-50">
              <object
                data={termsDoc}
                type="application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                className="w-full h-full"
              >
                <div className="w-full h-full flex flex-col px-6 overflow-y-auto text-gray-500">
                  <h1>Class Edge – Terms of Service</h1>
                  <p><strong>Effective Date:</strong> 1st January 2026</p>

                  <p>
                    Welcome to <strong>Class Edge</strong>. These Terms of Service ("Terms")
                    govern your access to and use of the Class Edge web and mobile applications,
                    websites, and services (collectively, the "Service"). By accessing or using
                    Class Edge, you agree to be bound by these Terms.
                  </p>

                  <p>
                    If you do not agree with any part of these Terms, you may not use the Service.
                  </p>

                  <h2>1. About Class Edge</h2>
                  <p>Class Edge is a school management and analytics platform designed to:</p>
                  <ul>
                    <li>Track and manage student and teacher attendance</li>
                    <li>Record, analyze, and visualize academic performance</li>
                    <li>Provide insights to support student improvement</li>
                    <li>Enable secure communication between parents, teachers, and school management</li>
                  </ul>
                  <p>
                    Class Edge is intended for use by educational institutions and their authorized
                    users only.
                  </p>

                  <h2>2. User Roles and Access</h2>
                  <ul>
                    <li>School Administrators</li>
                    <li>Teachers (Class Teachers and Subject Teachers)</li>
                    <li>Parents / Guardians</li>
                  </ul>
                  <p>
                    Each user role has access only to features relevant to their responsibilities.
                    Access permissions are managed by the school administration.
                  </p>
                  <p>
                    Users are responsible for maintaining the confidentiality of their login
                    credentials and all activities under their accounts.
                  </p>

                  <h2>3. Data Collection and Use</h2>

                  <h3>3.1 Academic and Attendance Data</h3>
                  <ul>
                    <li>Student attendance records</li>
                    <li>Academic scores (classwork, quizzes, exams, participation)</li>
                    <li>Performance trends and analytics</li>
                  </ul>
                  <p>
                    This data is used solely to provide insights, reports, and decision-support
                    tools for schools, parents, and teachers.
                  </p>

                  <h3>3.2 Accuracy of Information</h3>
                  <p>
                    Schools and teachers are responsible for ensuring all data entered into the
                    system is accurate and up to date. Class Edge does not independently verify data.
                  </p>

                  <h2>4. Performance Analytics and Insights</h2>
                  <ul>
                    <li>Academic Performance Index</li>
                    <li>Growth trends</li>
                    <li>Consistency metrics</li>
                  </ul>
                  <p>
                    These insights are informational tools only and do not replace professional
                    educational judgment.
                  </p>

                  <h2>5. Communication Features</h2>
                  <p>Class Edge includes messaging tools that allow:</p>
                  <ul>
                    <li>Parents to communicate with teachers</li>
                    <li>Teachers to communicate with parents</li>
                    <li>School management to communicate with both parties</li>
                  </ul>
                  <p>
                    Harassment, abuse, or misuse of messaging tools may result in account suspension.
                  </p>

                  <h2>6. Student Promotion and Administrative Actions</h2>
                  <p>
                    Certain actions (such as student promotion) require explicit confirmation by
                    authorized school staff. Class Edge does not automatically promote or demote students.
                  </p>

                  <h2>7. Privacy and Data Protection</h2>
                  <ul>
                    <li>Data is accessible only to authorized users</li>
                    <li>No selling or sharing of data for marketing purposes</li>
                    <li>Schools must obtain parental consent where required by law</li>
                  </ul>

                  <h2>8. Service Availability</h2>
                  <p>
                    Class Edge does not guarantee uninterrupted or error-free service. Temporary
                    downtime may occur due to maintenance or technical issues.
                  </p>

                  <h2>9. Intellectual Property</h2>
                  <p>
                    All content, software, designs, and branding are the intellectual property of
                    Class Edge.
                  </p>

                  <h2>10. Acceptable Use</h2>
                  <ul>
                    <li>Do not misuse the platform or access unauthorized data</li>
                    <li>Do not upload false or misleading information</li>
                    <li>Do not attempt to breach system security</li>
                  </ul>

                  <h2>11. Termination of Access</h2>
                  <p>
                    Class Edge may suspend or terminate access if these Terms are violated.
                  </p>

                  <h2>12. Limitation of Liability</h2>
                  <ul>
                    <li>Academic outcomes based on platform insights</li>
                    <li>Data inaccuracies entered by users</li>
                    <li>Unauthorized account access</li>
                  </ul>

                  <h2>13. Changes to These Terms</h2>
                  <p>
                    Continued use of the Service after updates constitutes acceptance of the revised Terms.
                  </p>

                  <h2>14. Contact Information</h2>
                  <p>
                    Email: <a href="mailto:theclassedge@gmail.com">theclassedge@gmail.com</a>
                  </p>

                  <p><strong>
                    By using Class Edge, you acknowledge that you have read, understood, and agreed
                    to these Terms of Service.
                  </strong></p>
                </div>
              </object>
            </div>
            <div className="px-4 py-3 bg-gray-50 border-t">
              <a
                href={termsDoc}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Download Terms (.docx)
              </a>
            </div>
          </div>

          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-gray-300"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <span className="text-sm text-gray-700">
              I have read and agree to the Terms of Service
            </span>
          </label>
        </div>

        <div className="px-6 py-4 border-t flex items-center justify-end gap-3">
          <button
            type="button"
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
            onClick={onClose}
          >
            Close
          </button>
          <button
            type="button"
            className={`px-4 py-2 rounded-lg font-semibold ${
              agreed
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-blue-600/50 text-white cursor-not-allowed'
            }`}
            disabled={!agreed}
            onClick={onClose}
          >
            Agree & Close
          </button>
        </div>
      </div>
    </div>
  );
}

