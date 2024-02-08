"use client";

import { useEffect, useState } from "react";
import Modal from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

type AlertModalProps = {
   isOpen: boolean;
   onClose: () => void;
   onConfirm: () => void;
   isLoading: boolean;
};
const AlertModal = ({ isLoading, isOpen, onClose, onConfirm }: AlertModalProps) => {
   const [isMounted, setIsMounted] = useState(false);
   useEffect(() => {
      setIsMounted(true);
   }, []);

   if (!isMounted) return null;

   return (
      <Modal
         title="Are you sure?"
         description="This action cannot be undone."
         isOpen={isOpen}
         onClose={onClose}
      >
         <div className="pt-6 space-x-2 flex items-center w-full">
            <Button disabled={isLoading} variant="outline" onClick={onClose}>
               Cancel
            </Button>
            <Button disabled={isLoading} variant="destructive" onClick={onConfirm}>
               Continue
            </Button>
         </div>
      </Modal>
   );
};

export default AlertModal;