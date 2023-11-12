import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import LinkList from '../components/LinkList';
import SearchBar from '../components/SearchBar';

type Link = {
  title: string;
  url: string;
};

const Home = () => {
  const [links, setLinks] = useState<Link[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('/api/links')
      .then((response) => response.json())
      .then((data) => setLinks(data.links));
  }, []);

  const filteredLinks = links.filter((link) =>
    link.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <Header />
      <div className="container mx-auto max-w-md">
        <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
        <LinkList links={filteredLinks} />
      </div>
    </div>
  );
};

export default Home;