import { Download, FileText, Printer, X } from "lucide-react";
import allergyImg from "../assets/allergies.svg";

export default function AllergyDownloadModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-secondary/90 backdrop-blur-sm">
      <div className="relative bg-white w-full max-w-[90vw] max-h-[90vh] overflow-hidden rounded-2xl flex flex-col shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="font-spatial-black text-secondary text-2xl uppercase">Allergy Information</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-6 h-6 text-secondary" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 flex  flex-col-reverse gap-8">
          {/* Image Preview */}
          <div className="w-full md:w-full bg-gray-50 rounded-xl p-4 border border-primary/20">
            <img src={allergyImg} alt="Allergy List" className="w-full h-auto" />
          </div>

          {/* Download Options */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <p className="font-host-grotesk text-secondary text-sm">
              Keep a copy of our allergen guide for your records or share it with others.
            </p>
            
            <a href={allergyImg} download="BurgerStop-Allergies.svg" 
               className="flex items-center w-1/2 justify-between bg-transparent border border-primary hover:bg-primary/10 text-secondary font-spatial-black p-4 rounded-xl hover:opacity-90 transition">
              <span>DOWNLOAD SVG</span>
              <Download size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}