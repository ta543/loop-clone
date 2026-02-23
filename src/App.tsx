import { useState } from "react";
import { CountrySelector } from "@/components/CountrySelector";
import { AnnouncementBar } from "@/sections/AnnouncementBar";
import { Header } from "@/sections/Header";
import { Main } from "@/sections/Main";
import { Footer } from "@/sections/Footer";
import { CartDialog } from "@/components/CartDialog";
import { OrderNotesDialog } from "@/components/OrderNotesDialog";

export const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <body className="text-neutral-900/80 text-xl not-italic normal-nums font-medium accent-auto bg-fixed bg-white box-border caret-transparent block tracking-[-0.6px] leading-[30px] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-avantt">
      <div className="box-border caret-transparent">
        <div className="relative caret-transparent z-[2147483647]">
          <div className="absolute caret-transparent flex left-0 top-0"></div>
        </div>
      </div>
      <div className="box-border caret-transparent">
        <div className="relative caret-transparent z-[2147483647]">
          <div className="absolute caret-transparent flex left-0 top-0"></div>
        </div>
      </div>
      <div className="box-border caret-transparent">
        <div className="relative caret-transparent z-[2147483647]">
          <div className="absolute caret-transparent flex left-0 top-0"></div>
        </div>
      </div>
      <div className="box-border caret-transparent"></div>
      <title className="box-border caret-transparent hidden">
        Your Life, Your Volume | Loop Earplugs
      </title>
      <div className="box-border caret-transparent"></div>
      <CountrySelector />
      <AnnouncementBar />
      <Header onOpenCart={() => setIsCartOpen(true)} />
      <div className="box-border caret-transparent"></div>
      <div className="box-border caret-transparent"></div>
      <Main />
      <Footer />
      <div className="box-border caret-transparent"></div>
      <CartDialog isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <OrderNotesDialog />
      <div className="box-border caret-transparent"></div>
      <div className="box-border caret-transparent"></div>
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent">
          <a className="box-border caret-transparent hidden">Edit options</a>
        </div>
      </div>
      <div className="absolute box-border caret-transparent hidden z-[9999]"></div>
      <div className="box-border caret-transparent">
        <div className="caret-transparent">
          <div className="caret-transparent"></div>
        </div>
      </div>
      <div className="box-border caret-transparent">
        <iframe
          src="cid://frame-1A315D77F1EC46328879A566879F4619@mhtml.blink"
          title="Shop Pay cart sync"
          className="caret-transparent border-zinc-100"
        ></iframe>
      </div>
      <div className="box-border caret-transparent">
        <div className="caret-transparent"></div>
      </div>
      <div className="box-border caret-transparent"></div>
      <div className="box-border caret-transparent">
        <div className="caret-transparent"></div>
      </div>
      <div className="fixed bg-black box-border caret-transparent hidden h-full opacity-50 w-full z-[2147483645] left-0 top-0"></div>
      <iframe
        title="loyalty popup"
        className="fixed text-black text-base bg-white shadow-[rgba(0,0,0,0.5)_0px_1px_4px_0px] box-border caret-transparent hidden h-[400px] w-[540px] z-[2147483647] left-2/4 top-2/4 font-sans_serif"
      >
        &lt;div
        style=&#39;width:100%;height:100%;background-color:white;text-align:center;&#39;&gt;&lt;/div&gt;
      </iframe>
      <div className="box-border caret-transparent">
        <div className="caret-transparent"></div>
      </div>
    </body>
  );
};
