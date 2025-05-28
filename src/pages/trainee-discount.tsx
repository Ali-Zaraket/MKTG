import Wrapper2 from "../components/layouts/wrapper2";
import ReactGA from "react-ga4";

export default function TraineeDiscount() {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });

  return (
    <Wrapper2>
      <div className="my-20 text-center">
        <h1 className="text-5xl text-primary font-semibold">Trainee Discount</h1>
      </div>

      <p className="text-lg font-light">
        We are pleased to be able to offer educational discounts to students, fellows, trainees, and/or research staff.
        Once Trainee Status is validated, you will be emailed a code to redeem the Apple Store app for either 6 months
        at $9.99/month or $299.99/year, a nearly %40 discount!
      </p>

      <div className="mt-20 font-light">
        <p className="text-2xl mb-4">Terms &amp; Conditions</p>
        <div className="text-lg pl-10">
          <ul className="list-disc [&>li]:mb-4">
            <li>
              <p>Trainee pricing is available only to currently enrolled residents</p>
            </li>
            <li>
              <p>
                Trainee discounts are limited to one per device. You will receive unique coupon codes for each purchase.
              </p>
            </li>
            <li>
              <p>Trainee discounts are non-transferable.</p>
            </li>
            <li>
              <p>
                Your application for Trainee pricing will be accepted or declined at the sole discretion of ImageAssist.
              </p>
            </li>
            <li>
              <p>
                The discount code can only be used once. Sharing of the code will result in the inability to purchase at
                your discount. Shared codes will also result in the suspension of your account.
              </p>
            </li>
            <li>
              <p>Please allow 48 hours for our admin team to validate your educational documents.</p>
            </li>
            <li>
              <p>
                ImageAssist reserves the right to change these terms and conditions without notice at our discretion.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper2>
  );
}
