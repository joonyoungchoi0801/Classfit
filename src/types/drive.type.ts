interface DriveFileParams {
  driveType: 'PERSONAL' | 'SHARED';
  multipartFiles: File[];
  folderPath: string;
}

export type FileType =
  | 'FOLDER'
  | 'DOCUMENT'
  | 'IMAGE'
  | 'VIDEO'
  | 'AUDIO'
  | 'ARCHIVE'
  | 'OTHER'
  | 'UNKNOWN';
