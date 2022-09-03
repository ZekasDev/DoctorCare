import React, { useState, useEffect } from "react";
import Logo from "../../assets/Logo";
import { FiAlignRight } from "react-icons/fi";
import Modal from "../Modal/Modal";
import "./Header.scss";

export default function Header() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let header = document.querySelector(".header-container");
      let icon = document.querySelector(".header-icon");
      if (window.pageYOffset > 50) {
        setScrolled(false);
        icon.classList.add("scrolled");
        header.classList.add("scrolled");
      } else {
        setScrolled(true);
        header.classList.remove("scrolled");
        icon.classList.remove("scrolled");
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });

  function openModal() {
    document.body.style.overflow = "hidden";
    setModalOpen(true);
  }

  function closeModal() {
    document.body.style.overflow = "unset";
    setModalOpen(false);
  }

  return (
    <header className="header-container">
      <div className="header-wrapper">
        <Logo colored={scrolled} />
        <FiAlignRight
          className="header-icon"
          size={32}
          onClick={openModal}
          style={{ cursor: "pointer" }}
        />
      </div>
      {isModalOpen && <Modal closeModal={closeModal} />}
    </header>
  );
}
