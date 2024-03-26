import { useState } from "react";

function Permissions() {
  const [havePermissions, setHavePermissions] = useState(false);

  const checkPermissions = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      alert("accepted the permissions");
      setHavePermissions(true);
    } catch (err) {
      setHavePermissions(false);
      console.log(`${err.name} : ${err.message}`);      
    }
  };

  return (
    <button onClick={checkPermissions}>Permissions button {havePermissions ? "Granted" : "Denied"}</button>
  );
}

export default Permissions;