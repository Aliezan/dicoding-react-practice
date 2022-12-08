import React from 'react';
import { createRoot } from 'react-dom/client';

const Button = ({ link }) => {
  return (
    <div>
      <a href={link}>Find out more</a>
    </div>
  );
};

const CardHeader = ({ image, category }) => {
  return (
    <div>
      <Header />
      <h4>{category}</h4>
      <img src={image} alt="" />
    </div>
  );
};

const CardBody = ({ date, title, content, link }) => {
  return (
    <div>
      <p>{date}</p>
      <h2>{title}</h2>
      <p>{content}</p>
      <Button link={link} />
    </div>
  );
};

const Card = ({ image, category, date, title, content, link }) => {
  return (
    <article>
      <CardHeader image={image} category={category} />
      <CardBody date={date} title={title} content={content} link={link} />
    </article>
  );
};

const Header = ({ title, subtitle }) => {
  return (
    <header>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
};

const News = () => {
  const someNews = [
    {
      title: 'CNN Acuire BEME',
      date: 'March 20 2022',
      content: "CNN purchased Casey Neistat's Beme app for $25million.",
      image: 'https://source.unsplash.com/user/erondu/600x400',
      category: 'News',
      link: '#'
    },
    {
      title: 'React and the WP-API',
      date: 'March 19 2022',
      content: 'The first ever decoupled starter theme for React & the WP-API.',
      image: 'https://source.unsplash.com/user/ilyapavlov/600x400',
      category: 'News',
      link: '#'
    },
    {
      title: 'Nomad Lifestyle',
      date: 'March 19 2022',
      content: 'Learn our tips and tricks on living a nomadic lifestyle.',
      image: 'https://source.unsplash.com/user/erondu/600x400',
      category: 'Travel',
      link: '#'
    }
  ];

  return (
    <div>
      <Header title="Latest News" subtitle="Covering March & April 2022" />
      {someNews.map((News) => (
        <Card {...News} key={News.title} />
      ))}
      <Card />
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<News />);
