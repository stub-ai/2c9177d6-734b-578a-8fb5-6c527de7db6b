import React from 'react';

type Link = {
  title: string;
  url: string;
};

type LinkListProps = {
  links: Link[];
};

const LinkList: React.FC<LinkListProps> = ({ links }) => {
  return (
    <ul className="space-y-4">
      {links.map((link, index) => (
        <li key={index} className="border p-4 rounded-md">
          <a href={link.url} className="text-blue-500 hover:underline">
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default LinkList;