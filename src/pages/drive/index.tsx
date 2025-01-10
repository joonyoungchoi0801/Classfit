import DriveLayout from "@/components/layout/drivelayout";
import { useParams, Navigate } from "react-router-dom";
import MyDrive from "./myDrive";
import SharedDrive from "./sharedDrive";
import MyTrash from "./myTrash";
import SharedTrash from "./sharedTrash";

function Drive() {
  const { type, subtype } = useParams<{ type: string; subtype?: string }>();

  return (
    <DriveLayout>
      {type === 'my' && <MyDrive />}
      {type === 'shared' && <SharedDrive />}
      {type === "trash" && (
        <>
          {!subtype && <Navigate to="/drive/trash/my" replace />}
          {subtype === "my" && <MyTrash />}
          {subtype === "shared" && <SharedTrash />}
        </>
      )}
    </DriveLayout>
  )
}

export default Drive;