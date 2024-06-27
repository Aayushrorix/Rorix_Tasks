export interface Image{
    fileName: String;
    fileSrc: String;
}

export interface PersonalDetail{
    firstName: String;
    middleName: String;
    lastName: String;
    email: String;
    mobileNumber: String;
    dob: Date;
    image : Image;
    presentAddress: String;
    permanentAddress: String;
    copyAddress: Boolean;
}

export interface BankDetails{
    bankName: String;
    accountName: String;
    accountNumber: String;
    ifscCode: String;
    aadhaarNumber: String;
    panNumber: String;
}


export interface ResumeFile{
    fileName: String;
    fileSrc: Object;
}

export interface ProfessionalDetail{
    designation: String;
    department: String;
    years: String;
    months: String;
    currentLocation: String;
    skills: Object;
    resumeFile: ResumeFile;
}


export interface EducationInfo {
    educationName: string;
    universityName: string;
    result: string;
    yearOfPassing: string;
}

type EducationArray = EducationInfo[];

export interface ExperienceInfo {
    companyName: string;
    position: string;
    totalYear: string;
    lastCTC: string;
}

// Define the type for the array containing this object
export type ExperienceArray = ExperienceInfo[];


export interface CurrentOrganizationDetail{
    appraisalDate: Date;
    currentCTC: String;
    joiningDate: Date;
}

export interface Employee{
    id: string;
    personalDetail: PersonalDetail;
    bankDetail: BankDetails;
    currentOrganizationDetail: CurrentOrganizationDetail;
    educationDetails: EducationArray;
    experienceDetails: ExperienceArray;
    professionalDetail: ProfessionalDetail;
}