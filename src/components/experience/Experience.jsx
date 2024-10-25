import React from "react";
import "./experience.css";
import {
  SiPython,
  SiPowershell,
  SiMicrosoft,
  SiMicrosoftazure,
  SiFirewalla,
  SiOpenvpn,
  SiDatto,
  SiMicrosoftsqlserver,
} from "react-icons/si";
import { VscProject } from "react-icons/vsc";
import { GiProcessor } from "react-icons/gi";
import { SlFolderAlt } from "react-icons/sl";
import { BsHddNetworkFill, BsPcDisplayHorizontal } from "react-icons/bs";
import { MdTroubleshoot } from "react-icons/md";
const Experience = () => {
  return (
    <section id="experience">
      <h5>Technologies that I work with the most</h5>
      <h2>My skills</h2>

      <div className="container experience__container">
        <div>
          <h3>Cloud & Infrastructure Management</h3>

          <div className="experience__content">
            <article className="experience__details">
              <SiMicrosoftazure className="experience__details-icon" />
              <h4>Microsoft Azure Cloud</h4>
            </article>

            <article className="experience__details">
              <SiMicrosoft className="experience__details-icon" />
              <h4>Microsoft 365 Administration</h4>
            </article>

            <article className="experience__details">
              <SiMicrosoftazure className="experience__details-icon" />
              <h4>Azure Backup & Veeam</h4>
            </article>

            <article className="experience__details">
              <SiMicrosoft className="experience__details-icon" />
              <h4>Microsoft Intune & Autopilot</h4>
            </article>

            {/* <article className="experience__details">
              <SiPython className="experience__details-icon" />
              <h4>Python</h4>
            </article>
            <article className="experience__details">
              <SiTailwindcss className="experience__details-icon" />
              <h4>TailwindCSS</h4>
            </article>

            <article className="experience__details">
              <BsBootstrapFill className="experience__details-icon" />
              <h4>Bootstrap</h4>
            </article> */}
          </div>
        </div>

        <div>
          <h3>Network & Security</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiFirewalla className="experience__details-icon" />
              <h4>Firewall Configuration</h4>
            </article>

            <article className="experience__details">
              <BsHddNetworkFill className="experience__details-icon" />
              <h4>Networking Equipment</h4>
            </article>

            <article className="experience__details">
              <SiOpenvpn className="experience__details-icon" />
              <h4>VPN & Security</h4>
            </article>

            {/* <article className="experience__details">
              <SiMicrosoftsqlserver className="experience__details-icon" />
              <h4>MSSQL</h4>
            </article>
            <article className="experience__details">
              <SiDjango className="experience__details-icon" />
              <h4>Django</h4>
            </article>
            <article className="experience__details">
              <SiPostgresql className="experience__details-icon" />
              <h4>PostgreSQL</h4>
            </article> */}
          </div>
        </div>

        <div>
          <h3>Monitoring & Remote Management</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPcDisplayHorizontal className="experience__details-icon" />
              <h4>PRTG Monitoring</h4>
            </article>
            <article className="experience__details">
              <SiDatto className="experience__details-icon" />
              <h4>Datto RMM</h4>
            </article>
          </div>
        </div>

        <div>
          <h3>System & User Management</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SlFolderAlt className="experience__details-icon" />
              <h4>Active Directory & Exchange Management</h4>
            </article>
            <article className="experience__details">
              <MdTroubleshoot className="experience__details-icon" />
              <h4>IT Escalations & Troubleshooting</h4>
            </article>
          </div>
        </div>

        <div>
          <h3>Scripting & Database</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiPython className="experience__details-icon" />
              <h4>Python</h4>
            </article>
            <article className="experience__details">
              <SiPowershell className="experience__details-icon" />
              <h4>PowerShell</h4>
            </article>
            <article className="experience__details">
              <SiMicrosoftsqlserver className="experience__details-icon" />
              <h4>SQL</h4>
            </article>
          </div>
        </div>

        <div>
          <h3>Additional Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <GiProcessor className="experience__details-icon" />
              <h4>ITIL</h4>
            </article>
            <article className="experience__details">
              <VscProject className="experience__details-icon" />
              <h4>Project Management</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
