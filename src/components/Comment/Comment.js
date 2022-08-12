import React from 'react';
import {View, Text} from 'react-native';
import CommentIcon from '../../assets/svg/comment.svg';
import LoveIcon from '../../assets/svg/love.svg';
import CareerIcon from '../../assets/svg/career.svg';
import HealthIcon from '../../assets/svg/health.svg';
import styles from './Comment.style';

const Comment = ({icon, text, secondTitle}) => {
  return (
    <View style={styles.comment}>
      <View style={styles.comment_titles}>
        <Text style={styles.comment_title}>{secondTitle}</Text>

        {icon === 'comment' ? (
          <CommentIcon width={40} height={40} fill={'#652A6C'} />
        ) : icon === 'love' ? (
          <LoveIcon width={40} height={40} fill={'#652A6C'} />
        ) : icon === 'health' ? (
          <HealthIcon width={40} height={40} fill={'#652A6C'} />
        ) : (
          <CareerIcon width={40} height={40} fill={'#652A6C'} />
        )}
      </View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Comment;
