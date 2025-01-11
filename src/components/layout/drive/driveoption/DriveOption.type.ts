export interface DriveOptionProps {
  isDriveData: boolean;
}

export interface DriveDataProps {
  data?: DriveData[];
}

export interface DriveData {
  fileName: string;
  fileUrl: string;
  folderPath: string;
  uploadedBy: string;
  uploadedAt: string;
  isChecked: boolean;
}
