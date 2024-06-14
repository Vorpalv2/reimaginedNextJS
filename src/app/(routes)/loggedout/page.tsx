import Toast from "@/components/Toast";
import React from "react";

function LogoutPage() {
  return (
    <div className="container">
      <Toast toastClass="alert-info" toastMessage="Signed Out" />
    </div>
  );
}

export default LogoutPage;
