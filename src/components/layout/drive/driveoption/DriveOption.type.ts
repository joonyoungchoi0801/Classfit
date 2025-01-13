export interface DriveOptionProps {
  isDriveData: boolean;
  type: string | undefined;
  path: string;
  selectedData?: DriveData[];
}

export interface DriveDataProps {
  data?: DriveData[];
  onClickData: (fileName: string) => void;
  onClickFolder: (fileType: string, fileName: string) => void;
}

export interface DriveData {
  fileType: string;
  originalFileName: string;
  fileName: string;
  fileSize: string;
  fileUrl: string;
  folderPath: string;
  uploadedBy: string;
  uploadedAt: string;
  isChecked: boolean;
}

export interface FilePopupProps {
  onClick: (fileType: string) => void;
}

export interface PopUpProps {
  type: string | undefined;
  path: string;
  selectedFileName: string;
}
