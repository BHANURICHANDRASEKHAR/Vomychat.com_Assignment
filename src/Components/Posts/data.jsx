import React from 'react';

const PostCard = ({ post }) => {
  return (
    <div className="card mb-4" style={{ maxWidth: '100%', borderRadius: '10px', border: '1px solid #ddd', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
     data-aos="zoom-in-up"
     data-aos-duration="900"
     data-aos-delay="200"
     data-aos-easing="ease-in-out"
     data-aos-mirror="true"
     data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      
      <div className="card-header" style={{ backgroundColor: '#f8f9fa', padding: '1rem', borderBottom: '1px solid #ddd' }}>
        <h5 className="card-title" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{post.title}</h5>
        <span className="badge bg-info" style={{ fontSize: '0.875rem', fontWeight: 'normal' }}>{post.link_flair_text}</span>
      </div>

      <div className="card-body" style={{ padding: '1.5rem' }}>
      {post.thumbnail && post.thumbnail !== 'self' ? 
        <div className="d-flex justify-content-center">
          <img src={post.thumbnail} alt={post.title} className="img-fluid mt-3" style={{ borderRadius: '5px', minHeight: '300px', objectFit: 'cover' }} />
        </div> :
        <div className="d-flex justify-content-center">
          <img src='https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg' alt='Image Not Found' className='img-fluid mt-3' style={{ borderRadius: '5px', maxHeight: '300px', objectFit: 'cover' }} />
        </div>
      }
      
        <p className="card-text mt-1" style={{ fontSize: '1rem', color: '#555' }}>{post.selftext}</p>
        <div className="d-flex justify-content-between mt-3">
          <span className="text-primary" style={{ fontSize: '0.875rem' }}>Posted by: {post.author_fullname}</span>
          <a href={`https://www.reddit.com${post.permalink}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm" style={{ padding: '0.375rem 0.75rem', fontSize: '0.875rem' }}>
            View Post
          </a>
        </div>
      </div>

      <div className="card-footer text-muted" style={{ backgroundColor: '#f8f9fa', padding: '1rem', borderTop: '1px solid #ddd' }}>
        <a href={`https://www.reddit.com/r/${post.subreddit}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.875rem', color: '#007bff' }}>
          Visit Subreddit: r/{post.subreddit}
        </a>
      </div>
    </div>
  );
};

export default PostCard;
