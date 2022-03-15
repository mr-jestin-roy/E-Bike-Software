/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Billing page components
import Bill from "layouts/billing/components/Bill";

function BillingInformation() {
  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          Billing Information
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Bill
            name="keshvan pillai"
            company="KSEB Muvattupuzha"
            email="keshvan@kseb.com"
            vat="FRB1235476"
          />
          <Bill
            name="kenny sebastin"
            company="KSEB Kothamangalam"
            email="kenny@kseb.com"
            vat="FRB1235477"
          />
          <Bill
            name="Biju Kurian"
            company="KSEB Perumbavoor"
            email="biju@kseb.com"
            vat="FRB1235478"
          />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default BillingInformation;
