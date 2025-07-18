import React from "react";
import IconButton from "../atoms/IconButton";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaGithub } from "react-icons/fa";

const SocialLoginButtons = ({ onGoogle, onFacebook, onGithub }) => (
  <div className="flex justify-center gap-4">
    <IconButton onClick={onGoogle}><FcGoogle size={20} /></IconButton>
    <IconButton onClick={onFacebook} className="text-blue-600"><FaFacebookF size={20} /></IconButton>
    <IconButton onClick={onGithub} className="text-gray-800"><FaGithub size={20} /></IconButton>
  </div>
);

export default SocialLoginButtons;
