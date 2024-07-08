
export interface Image{
    fileName: string;
    fileSrc: string;
}

export interface PersonalDetail{
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    mobileNumber: string;
    dob: Date | string;
    // image : Image;
    presentAddress: string;
    permanentAddress: string;
    copyAddress: Boolean;
}

export interface BankDetails{
    bankName: string;
    accountName: string;
    accountNumber: string;
    ifscCode: string;
    aadhaarNumber: string;
    panNumber: string;
}


export interface ResumeFile{
    fileName: string;
    fileSrc: Object;
}

export interface ProfessionalDetail{
    designation: string;
    department: string;
    years: string;
    months: string;
    currentLocation: string;
    skills: Object;
    // resumeFile: ResumeFile;
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
    appraisalDate: Date | string;
    currentCTC: string;
    joiningDate: Date | string;
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

