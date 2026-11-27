import { Copyright } from "../Copyright";
import { SocialLinks } from "../SocialLinks";

export const Footer = () => {
  return (
    <footer className="bg-footer-bg w-full">
      <div className="flex w-full flex-col items-center justify-center px-4 py-10">
        <div className="flex w-full flex-col items-center justify-center">
          <SocialLinks />
        </div>
        <div className="mt-6 flex w-full flex-col items-center justify-center">
          <Copyright />
        </div>
      </div>
    </footer>
  );
};