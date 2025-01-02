import React, {useState,useEffect} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News =(props)=> {
  
  const capital = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
  
  const [articles, setArticles] = useState([])
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const [loading, setLoading] = useState(true)
  

  const update=async()=> {

    //props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1982e79b8e8240d08b30fc00d4269372&page=${page}&pageSize=${props.pageSize}`;   
    setLoading(true)
    
    let data = await fetch(url);
    //props.setProgress(50);
    let parsedData = await data.json()
    //props.setProgress(70);
    setArticles(parsedData.articles)   
    setTotalResults(parsedData.totalResult)
    setLoading(false)    
    //props.setProgress(100);
  }


  const previousBtn = async () => {

    update()
    setPage(page-1)
   
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bb8d273522e64e2fae382b2fe82d3791&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // setLoading(true)
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // this.setState({
    //   articles: parsedData.articles,
    //   page: this.state.page - 1,
    //   loading: false
    // })
    //   this.setState({
    //     page: this.state.page - 1
    //   });
    //   this.update();
    // }
  }

  const nextBtn = async () => {

    update()   
    setPage(page+1)  
    // this.setState({
    //   page: this.state.page + 1
    // });
    // this.update();
  }

  useEffect(() => {
    update()    
   
    // setArticles(parsedData.articles)
    // setTotalResults(parsedData.totalResult)
    // setLoading(false) 
  }, [])
  
  // async componentDidMount() {
    
  //   try {
  //     //this.props.setProgress(20);
  //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bb8d273522e64e2fae382b2fe82d3791&page=1&pageSize=${this.props.pageSize}`;
  //     this.setState({ loading: true })
  //     let data = await fetch(url);
  //     //this.props.setProgress(30);
  //     let parsedData = await data.json()
  //     //this.props.setProgress(70);
  //     this.setState({
  //       articles: parsedData.articles,
  //       totalResults: parsedData.totalResults,
  //       loading: false
  //     })
  //     //this.props.setProgress(100);
  //   }
  //   catch (e) {
  //     console.log("issue");
  //   }
  // }

  const fetchData = async () => {

    //this.setState({ page: this.state.page + 1 })
    setPage(page+1)
    //props.setProgress(30);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1982e79b8e8240d08b30fc00d4269372&page=${page + 1}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    //props.setProgress(50);
    let parsedData = await data.json()
    //props.setProgress(70);
    setArticles((articles.concat(parsedData.articles)))
    setTotalResults(parsedData.totalResult)
    //props.setProgress(100);
    // this.setState({
    //   articles: this.state.articles.concat(parsedData.articles),
    //   totalResults: parsedData.totalResults,
    //   loading: false
    // })
     //this.props.setProgress(100);
  }
 
    return (
      <>

        <h1 className='text-center' style={{marginTop:"90px"}}>News Panda - Top {capital(props.category)} Headlines</h1>
        {/* {this.state.loading && <Spinner />} */}

        <InfiniteScroll
          dataLength={articles.length} //This is important field to render the next data
          next={fetchData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="container">
            <div className="row mX-3">
              {articles.map((e, index) => {
                return <div className="col-md-4 my-3 " key={index}>
                  <NewsItem title={e.title ? e.title.slice(0, 40) : ""} source={e.source.name} description={e.description ? e.description.slice(0, 80) : ""} imageUrl={e.urlToImage} newsUrl={e.url} author={e.author} date={e.publishedAt} />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} style={{ display: this.state.loading ? 'none' : "" }} type="button" onClick={this.previousBtn} className="btn btn-warning">&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} style={{ display: this.state.loading ? 'none' : "" }} type="button" className="btn btn-warning mx-3" onClick={this.nextBtn}>Next &rarr;</button>
        </div> */}

      </>
    )
  

 
}
News.defaultProps = {
  country: 'in',
  pageSize: 6,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News
