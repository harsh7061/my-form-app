// Form.js
import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    dob: '',
    gender: '',
    nationality: '',
    linkedIn: '',
    website: '',
    // Professional Information
    position: '',
    salaryExpectation: '',
    startDate: '',
    noticePeriod: '',
    workAuthorization: '',
    references: '',
    // Education Background
    educationLevel: '',
    institutionName: '',
    major: '',
    graduationDate: '',
    gpa: '',
    // Work Experience
    jobTitle: '',
    companyName: '',
    employmentStartDate: '',
    employmentEndDate: '',
    responsibilities: '',
    // Skills and Qualifications
    technicalSkills: '',
    softSkills: '',
    languageProficiency: '',
    // Cover Letter or Personal Statement
    coverLetter: null,
    // Additional Questions
    whyWorkHere: '',
    challengingSituation: '',
    motivation: '',
    willingToRelocate: '',
    commitments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prevState => ({
      ...prevState,
      coverLetterFile: file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can handle form submission here
  };

  return (
    <div className="form-container">
      <h2>Job Application Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Personal Information */}
        <div className="section-title">Personal Information</div>
        <div className="form-group">
          <label>First Name:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Middle Name:</label>
          <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Nationality:</label>
          <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>LinkedIn Profile:</label>
          <input type="text" name="linkedIn" value={formData.linkedIn} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Website or Portfolio:</label>
          <input type="text" name="website" value={formData.website} onChange={handleChange} />
        </div>

        {/* Professional Information */}
        <div className="section-title">Professional Information</div>
        <div className="form-group">
          <label>Position Applied For:</label>
          <input type="text" name="position" value={formData.position} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Desired Salary or Salary Expectations:</label>
          <input type="text" name="salaryExpectation" value={formData.salaryExpectation} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Start Date:</label>
          <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Notice Period:</label>
          <input type="text" name="noticePeriod" value={formData.noticePeriod} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Work Authorization Status:</label>
          <input type="text" name="workAuthorization" value={formData.workAuthorization} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>References:</label>
          <input type="text" name="references" value={formData.references} onChange={handleChange} />
        </div>

        {/* Education Background */}
        <div className="section-title">Education Background</div>
        <div className="form-group">
          <label>Highest Level of Education:</label>
          <input type="text" name="educationLevel" value={formData.educationLevel} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Institution Name:</label>
          <input type="text" name="institutionName" value={formData.institutionName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Major or Field of Study:</label>
          <input type="text" name="major" value={formData.major} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Graduation Date:</label>
          <input type="date" name="graduationDate" value={formData.graduationDate} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>GPA or Academic Achievements:</label>
          <input type="text" name="gpa" value={formData.gpa} onChange={handleChange} />
        </div>

        {/* Work Experience */}
        <div className="section-title">Work Experience</div>
        <div className="form-group">
          <label>Current or Most Recent Job Title:</label>
          <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Company Name:</label>
          <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Employment Start Date:</label>
          <input type="date" name="employmentStartDate" value={formData.employmentStartDate} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Employment End Date:</label>
          <input type="date" name="employmentEndDate" value={formData.employmentEndDate} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Responsibilities and Achievements:</label>
          <textarea name="responsibilities" value={formData.responsibilities} onChange={handleChange}></textarea>
        </div>

        {/* Skills and Qualifications */}
        <div className="section-title">Skills and Qualifications</div>
        <div className="form-group">
          <label>Technical Skills:</label>
          <input type="text" name="technicalSkills" value={formData.technicalSkills} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Soft Skills:</label>
          <input type="text" name="softSkills" value={formData.softSkills} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Language Proficiency:</label>
          <input type="text" name="languageProficiency" value={formData.languageProficiency} onChange={handleChange} />
        </div>

        {/* Cover Letter Upload */}
        <div className="form-group">
          <label>Cover Letter (PDF or Word document):</label>
          <input type="file" name="coverLetterFile" onChange={handleFileChange} />
        </div>

        {/* Additional Questions */}
        <div className="section-title">Additional Questions</div>
        <div className="form-group">
          <label>Why do you want to work for this company?</label>
          <textarea name="whyWorkHere" value={formData.whyWorkHere} onChange={handleChange}></textarea>
        </div>
        <div className="form-group">
          <label>Describe a challenging situation you encountered in a previous job and how you handled it:</label>
          <textarea name="challengingSituation" value={formData.challengingSituation} onChange={handleChange}></textarea>
        </div>
        <div className="form-group">
          <label>What motivates you in your work?</label>
          <textarea name="motivation" value={formData.motivation} onChange={handleChange}></textarea>
        </div>
        <div className="form-group">
          <label>Are you willing to relocate or travel for work (if applicable)?</label>
          <input type="text" name="willingToRelocate" value={formData.willingToRelocate} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Do you have any commitments or obligations that may affect your availability or ability to work specific hours?</label>
          <textarea name="commitments" value={formData.commitments} onChange={handleChange}></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
