import Link from "next/link";
import { Fragment } from "react";

const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

/**
 * Renders plain text with [label](url) markdown-style links converted to
 * real anchors. Internal paths (starting with "/") use next/link; anything
 * else renders as a plain external link. Content with no link syntax
 * renders unchanged.
 */
export function RichText({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  LINK_PATTERN.lastIndex = 0;
  while ((match = LINK_PATTERN.exec(text)) !== null) {
    const [full, label, href] = match;
    if (match.index > lastIndex) {
      parts.push(
        <Fragment key={key++}>{text.slice(lastIndex, match.index)}</Fragment>
      );
    }
    if (href.startsWith("/")) {
      parts.push(
        <Link key={key++} href={href} className="text-primary underline underline-offset-2 hover:text-copper">
          {label}
        </Link>
      );
    } else {
      parts.push(
        <a
          key={key++}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-2 hover:text-copper"
        >
          {label}
        </a>
      );
    }
    lastIndex = match.index + full.length;
  }

  if (lastIndex < text.length) {
    parts.push(<Fragment key={key++}>{text.slice(lastIndex)}</Fragment>);
  }

  return <>{parts}</>;
}
