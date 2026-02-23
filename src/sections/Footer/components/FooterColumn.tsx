export type FooterColumnProps = {
  title: string;
  links: Array<{
    href: string;
    text: string;
  }>;
};

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <div className="box-border caret-transparent shrink-0 col-start-6 max-w-full w-6/12 mt-12 px-3 md:w-3/12">
      <h3 className="text-white text-base box-border caret-transparent tracking-[-0.48px] leading-6 break-words md:text-xl md:tracking-[-0.6px] md:leading-[26px]">
        {props.title}
      </h3>
      <ul className="box-border caret-transparent list-none mt-2.5 pl-0">
        {props.links.map((link, index) => (
          <li key={index} className="box-border caret-transparent">
            <a
              href={link.href}
              className="text-zinc-400 text-base items-center box-border caret-transparent inline-flex tracking-[-0.48px] leading-6 underline-offset-[3px] py-0 md:text-xl md:tracking-[-0.6px] md:leading-[26px] md:py-[5px]"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
