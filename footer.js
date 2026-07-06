document.addEventListener("DOMContentLoaded", function() {
    const footerHTML = `
    <style>
        /* MASTER FOOTER GRID FIX - FORCES 3x2 BALANCE ON WIDE SCREENS */
        .footer-grid {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 4rem 2rem !important;
        }
        @media (max-width: 1024px) {
            .footer-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
            .footer-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
    </style>

    <footer>
        <div class="footer-grid">
            <div class="footer-column">
                <h4>Business Formation</h4>
                <ul>
                    <li><a href="vkformation.html#incorporation">US & Offshore Entity Incorporation</a></li>
                    <li><a href="vkformation.html#tax-registration">IRS EIN & State Tax Registration</a></li>
                    <li><a href="vkformation.html#agreements">Corporate Operating Agreements & Bylaws</a></li>
                    <li><a href="vkformation.html#holding-companies">Holding Companies & Asset Protection Shields</a></li>
                    <li><a href="vkformation.html#registered-agent">Turnkey Registered Agent Services</a></li>
                </ul>
            </div>

            <div class="footer-column">
                <h4>Embedded Payments</h4>
                <ul>
                    <li><a href="vkflow.html#processing">Credit, Debit, ACH & Digital Wallet Processing</a></li>
                    <li><a href="vkflow.html#merchant-accounts">Merchant Accounts & Secure Gateways</a></li>
                    <li><a href="vkflow.html#custom-checkout">Custom Checkout & Payment Links</a></li>
                    <li><a href="vkflow.html#fraud-shield">Fraud Shield & Secure Data Vaulting</a></li>
                    <li><a href="vkflow.html#recurring-billing">B2B Invoicing & Recurring Subscriptions</a></li>
                </ul>
            </div>

            <div class="footer-column">
                <h4>IT Managed Services</h4>
                <ul>
                    <li><a href="vkshield.html#helpdesk">24/7 Full-Service MSP IT Help Desk Support</a></li>
                    <li><a href="vkshield.html#device-provisioning">Zero-Touch Employee Device Provisioning</a></li>
                    <li><a href="vkshield.html#cloud-management">Cloud Architecture & Migrations</a></li>
                    <li><a href="vkshield.html#cyber-security">Security & Compliance (FINRA, HIPAA, NIST, PCI)</a></li>
                    <li><a href="vkshield.html#backup-recovery">Automated Disaster Recovery</a></li>
                </ul>
            </div>

            <div class="footer-column">
                <h4>Workforce & Payroll</h4>
                <ul>
                    <li><a href="vkpeople.html#global-hiring">Global Hiring & Entity Compliance</a></li>
                    <li><a href="vkpeople.html#global-payroll">Multi-Currency Payroll Automation</a></li>
                    <li><a href="vkpeople.html#health-benefits">Health Insurance & Benefits Management</a></li>
                    <li><a href="vkpeople.html#contractor-compliance">Contractor Compliance Guard</a></li>
                    <li><a href="vkpeople.html#tax-filing">Tax Filing & Reporting Automation</a></li>
                </ul>
            </div>

            <div class="footer-column">
                <h4>AI & Cloud Engineering</h4>
                <ul>
                    <li><a href="vkcortex.html#data-privacy">Private Enterprise Cloud Infrastructure (IaaS)</a></li>
                    <li><a href="vkcortex.html#internal-ai">Proprietary Knowledge Engines</a></li>
                    <li><a href="vkcortex.html#workflow-automation">Automated Operational Workflows</a></li>
                    <li><a href="vkcortex.html#client-support">Autonomous Client Support Agents</a></li>
                    <li><a href="vkcortex.html#document-processing">Smart Document & Data Extraction</a></li>
                </ul>
            </div>

            <div class="footer-column">
                <h4>VK Alliance (Founding 100)</h4>
                <ul>
                    <li><a href="vkalliance.html#deal-flow">Vetted Deal Flow & Enterprise Co-Investments</a></li>
                    <li><a href="vkalliance.html#operator-network">Private Invite-Only Executive Network</a></li>
                    <li><a href="vkalliance.html#equity-allocations">Founding 100 Private Equity Allocations</a></li>
                </ul>
            </div>
        </div>
        
        <div class="footer-bottom">
            <div class="footer-brand-name">V&K Partners</div>
            <div class="footer-tagline">HEADQUARTERED IN TAMPA, FL | DEPLOYED GLOBALLY | AUTHORITY. PRECISION. RESILIENCE.</div>
            <div class="footer-copyright">© 2026 VANDERBILT & KNIGHT PARTNERS INC. ALL RIGHTS RESERVED.</div>
        </div>
    </footer>
    `;

    // Inject the footer into the placeholder
    const footerContainer = document.getElementById("vk-master-footer");
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    }
});
