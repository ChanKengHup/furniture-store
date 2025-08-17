import { Button } from "../ui/button";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Socials() {
  return (
    <div
      className="relative bg-cover bg-center py-16"
      style={{
        backgroundImage:
          "url('../../public/images/sofa-background-banner.jpg')",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-white">
          Connect with Us
        </h3>
        <div className="flex justify-center space-x-4">
          <Button
            variant="secondary"
            size="icon"
            className="bg-gray-500/80 hover:bg-gray-400/80 text-white border-0 transition-all duration-300"
          >
            <a
              href="https://www.facebook.com/lylynguyen.hatinh"
              target="_blank"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="bg-gray-500/80 hover:bg-gray-400/80 text-white border-0 transition-all duration-300"
          >
            <Twitter className="h-5 w-5" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="bg-gray-500/80 hover:bg-gray-400/80 text-white border-0 transition-all duration-300"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="bg-gray-500/80 hover:bg-gray-400/80 text-white border-0 transition-all duration-300"
          >
            <Instagram className="h-5 w-5" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="bg-gray-500/80 hover:bg-gray-400/80 text-white border-0 transition-all duration-300"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 3.463-2.001 4.568-1.105 1.105-2.71 1.832-4.568 2.001-1.858.169-7.858.169-9.716 0-1.858-.169-3.463-.896-4.568-2.001C-4.39 11.623-5.117 10.018-5.286 8.16c-.169-1.858-.169-7.858 0-9.716C-5.117 -3.414-4.39-5.019-3.285-6.124c1.105-1.105 2.71-1.832 4.568-2.001 1.858-.169 7.858-.169 9.716 0 1.858.169 3.463.896 4.568 2.001 1.105 1.105 1.832 2.71 2.001 4.568.169 1.858.169 7.858 0 9.716z" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}
