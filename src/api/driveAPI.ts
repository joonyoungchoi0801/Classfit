import instance from './instance';
import { FileType } from '@/types/drive.type';
import { API_DRIVE } from '@/constants/API';
import qs from 'qs';

export const getDriveFiles = (driveType: string, folderPath: string) => {
  return instance({
    method: 'get',
    url: API_DRIVE.FILE,
    params: {
      driveType,
      folderPath,
    },
  });
};

export const postDriveFiles = (
  driveType: string,
  multipartFiles: File[],
  folderPath: string
) => {
  const formData = new FormData();
  formData.append('driveType', driveType);
  multipartFiles.forEach((file) => {
    formData.append('multipartFiles', file);
  });
  formData.append('folderPath', folderPath);
  return instance({
    method: 'post',
    url: API_DRIVE.FILE,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: formData,
  });
};

export const getSearchedDriveFiles = (
  driveType: string,
  fileName: string,
  folderPath: string
) => {
  return instance({
    method: 'get',
    url: API_DRIVE.SEARCH,
    params: {
      driveType,
      fileName,
      folderPath,
    },
  });
};

export const getFilteredDriveFiles = (
  driveType: string,
  fileType: FileType,
  folderPath: string
) => {
  return instance({
    method: 'get',
    url: API_DRIVE.FILE,
    params: {
      driveType,
      fileType,
      folderPath,
    },
  });
};

export const getFileDownload = (
  driveType: string,
  filePath: string,
  fileNames: string[]
) => {
  return instance({
    method: 'get',
    url: API_DRIVE.DOWNLOAD,
    params: {
      driveType,
      filePath,
      fileNames,
    },
    paramsSerializer: (params) => {
      return qs.stringify(params, { arrayFormat: 'repeat' });
    },
    responseType: 'blob',
  });
};
// drive

export const postDriveFolder = (
  driveType: string,
  folderName: string,
  folderPath: string
) => {
  return instance({
    method: 'post',
    url: API_DRIVE.FOLDER,
    params: {
      driveType,
      folderName,
      folderPath,
    },
  });
};
export const deleteDriveFolder = (driveType: string, folderName: string[]) => {
  return instance({
    method: 'delete',
    url: API_DRIVE.FOLDER,
    params: {
      driveType,
      folderName,
    },
    paramsSerializer: (params) => {
      return qs.stringify(params, { arrayFormat: 'repeat' });
    },
  });
};

export const getDriveFolders = (driveType: string, folderPath: string) => {
  return instance({
    method: 'get',
    url: API_DRIVE.FOLDER,
    params: {
      driveType,
      folderPath,
    },
  });
};

export const getTrashFiles = (driveType: string) => {
  return instance({
    method: 'get',
    url: API_DRIVE.TRASH,
    params: {
      driveType,
    },
  });
};

export const postTrashFiles = (
  driveType: string,
  folderPath: string,
  fileNames: string[]
) => {
  return instance({
    method: 'post',
    url: API_DRIVE.TRASH,
    params: {
      driveType,
      folderPath,
      fileNames,
    },
    paramsSerializer: (params) => {
      return qs.stringify(params, { arrayFormat: 'repeat' });
    },
  });
};

export const deleteTrashFiles = (driveType: string, fileNames: string[]) => {
  return instance({
    method: 'delete',
    url: API_DRIVE.TRASH,
    params: {
      driveType,
      fileNames,
    },
    paramsSerializer: (params) => {
      return qs.stringify(params, { arrayFormat: 'repeat' });
    },
  });
};

export const restoreTrashFiles = (driveType: string, fileNames: string[]) => {
  return instance({
    method: 'post',
    url: API_DRIVE.RESTORE,
    params: {
      driveType,
      fileNames,
    },
    paramsSerializer: (params) => {
      return qs.stringify(params, { arrayFormat: 'repeat' });
    },
  });
};
