import Wrapper2 from "../components/layouts/wrapper2";

export default function UserGuide() {
  return (
    <Wrapper2>
      <div className="my-20 text-center">
        <h1 className="text-5xl text-primary font-semibold">User Guide</h1>
      </div>

      <p className="text-lg font-light">
        The following guidelines should be used when capturing patient images for each of the poses available within the
        ImageAssist app. These guidelines will assist in establishing consistent alignment and scale across photos taken
        for the various poses.
      </p>

      <div className="mt-20">
        <div className="flex items-center gap-x-20 mb-20">
          <img src="/guide1.png" alt="Portrait Pose" width="354" height="425" />

          <div>
            <h2 className="text-4xl font-semibold text-primary">Portrait Pose</h2>
            <p className="font-light text-lg mt-4">
              Align the top-most, curve (labeled A in the screenshot below) with the top of the patient’s head. Then,
              adjust the distance between your device and the patient so as to retain the alignment at A while also
              aligning the bottom-most curve in the overlay (B) with the bottom of the patient’s chin. The tip of the
              nose should be positioned behind the rectangle (C) in the center of the overlay, and the outer contour of
              the face should align within the curves to the right and left (D).
            </p>
          </div>
        </div>

        <div className="flex items-center gap-x-20 mb-20">
          <div>
            <h2 className="text-4xl font-semibold text-primary">Profile (90° Angle) Pose</h2>
            <p className="font-light text-lg mt-4">
              Follow the guidelines from the Portrait pose above to properly align the crown marker (E) with the top of
              the head. Have the patient turn his/her body until the point at which the edge of the chin lies behind the
              marker labeled as F in the image below and the tip of the nose lies anywhere within the rectangular box
              (G). The edge of the forehead should fall somewhere behind the forehead marker (H)
            </p>
          </div>
          <img src="/guide2.png" alt="Profile (90° Angle) Pose" width="354" height="425" />
        </div>

        <div className="flex items-center gap-x-20 mb-20">
          <img src="/guide3.png" alt="Portrait Pose" width="354" height="425" />

          <div>
            <h2 className="text-4xl font-semibold text-primary">45° Angle Pose</h2>
            <p className="font-light text-lg mt-4">
              Follow the guidelines from the Portrait pose above to properly align the crown marker (H) with the top of
              the head. Have the patient turn his/her body until the point at which the edge of the chin lies behind the
              marker labeled as I in the overlay and the tip of the nose lies anywhere within the rectangular box (J).
              For most individuals, half or more of the eye on the opposite side of the nose will be visible. The edge
              of the forehead should fall somewhere behind the forehead marker (K).
            </p>
          </div>
        </div>

        <div className="flex items-center gap-x-20 mb-20">
          <div>
            <h2 className="text-4xl font-semibold text-primary">Worm’s Eye Pose</h2>
            <p className="font-light text-lg mt-4">
              From the Portrait pose orientation, have the patient begin tilting his/her head backward until the bottom
              of the chin is evenly aligned with marker labeled as L on the pose overlay. Align the top-most line
              (labeled M in the screenshot below) with the top of the patient’s head. The nose should fall behind the
              rectangle (N), and the eyes should roughly fall within the rectangle outline (O).
            </p>
          </div>

          <img src="/guide4.png" alt="Worm’s Eye Pose" width="354" height="425" />
        </div>
      </div>
    </Wrapper2>
  );
}
