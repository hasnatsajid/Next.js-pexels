import Search from './Search';

const Hero = (props) => {
  return (
    <div id="hero">
      <div className="hero-content">
        <h1>The best free stock photos, Royalty free images shared by creators.</h1>
        <Search search={props.search} setInput={props.setInput} />
        <div className="suggested-searches">Suggested: model sad dark young man work man face more</div>
      </div>
    </div>
  );
};

export default Hero;
