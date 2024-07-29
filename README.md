# Sentiment Analysis of Social Media Presence

## Aim

The aim of this project is to build a sentiment analysis system that classifies text data into sentiment categories: positive, negative, or neutral. This can be used to understand public opinion from sources like social media, customer feedback, or product reviews.

## Overview

Sentiment analysis involves processing and analyzing text data to determine the sentiment conveyed within. The project includes data collection, preprocessing, feature extraction, model training, evaluation, and visualization.

## Description

### Steps Involved

1. **Data Collection**: Gather a dataset with text and sentiment labels.

2. **Data Preprocessing**: Clean and tokenize text data, removing stop words and punctuation.

    ```python
    import pandas as pd
    from nltk.tokenize import word_tokenize
    from nltk.corpus import stopwords
    import string

    def preprocess_text(text):
        tokens = word_tokenize(text.lower())
        tokens = [word for word in tokens if word not in stopwords.words('english') and word not in string.punctuation]
        return ' '.join(tokens)

    df['cleaned_text'] = df['text'].apply(preprocess_text)
    ```

3. **Feature Extraction**: Convert text to numerical features using TF-IDF.

    ```python
    from sklearn.feature_extraction.text import TfidfVectorizer

    vectorizer = TfidfVectorizer()
    X = vectorizer.fit_transform(df['cleaned_text'])
    ```

4. **Model Training**: Train a machine learning model to classify sentiment.

    ```python
    from sklearn.model_selection import train_test_split
    from sklearn.linear_model import LogisticRegression
    from sklearn.metrics import accuracy_score

    X_train, X_test, y_train, y_test = train_test_split(X, df['sentiment'], test_size=0.3, random_state=42)
    model = LogisticRegression()
    model.fit(X_train, y_train)
    y_pred = model.predict(X_test)
    print(f'Accuracy: {accuracy_score(y_test, y_pred):.2f}')
    ```

5. **Model Evaluation**: Evaluate the model using accuracy, precision, recall, and F1-score.

    ```python
    from sklearn.metrics import classification_report

    print(classification_report(y_test, y_pred))
    ```

6. **Visualization**: Visualize results and sentiment distribution using Word Clouds.

    ```python
    import matplotlib.pyplot as plt
    from wordcloud import WordCloud

    positive_text = ' '.join(df[df['sentiment'] == 'positive']['cleaned_text'])
    wordcloud = WordCloud(width=800, height=400, background_color='white').generate(positive_text)
    
    plt.imshow(wordcloud, interpolation='bilinear')
    plt.axis('off')
    plt.show()
    ```

# Case Study: Cyberbullying and Sentiment Analysis

## Tragic Incident

Priyanshu Yadav, a 16-year-old student from Ujjain, Madhya Pradesh, tragically took his own life due to relentless cyberbullying. Priyanshu, a class 10 student, faced derogatory comments and homophobic slurs after expressing his queer identity through cross-dressing. This heartbreaking event underscores the severe impact of cyberbullying and highlights the urgent need for effective measures to address online harassment.

## Relevance to Sentiment Analysis

### Understanding the Issue

Social media sentiment analysis can play a crucial role in understanding and mitigating issues related to cyberbullying and harassment. By analyzing online conversations and comments, sentiment analysis tools can help identify harmful content and patterns of abuse.

1. **Monitoring Online Sentiment**:
   Sentiment analysis can be used to monitor social media platforms for negative or harmful sentiments directed towards individuals. For example, comments on sensitive posts can be analyzed to detect instances of cyberbullying.

   ```python
   from textblob import TextBlob

   def analyze_sentiment(text):
       analysis = TextBlob(text)
       if analysis.sentiment.polarity < 0:
           return 'Negative'
       elif analysis.sentiment.polarity == 0:
           return 'Neutral'
       else:
           return 'Positive'

   comment = "Your cross-dressing is disgusting!"
   print(analyze_sentiment(comment))  # Output: Negative
   ```python
2. **Identifying Patterns**:
   Aggregating sentiment data helps reveal patterns of abuse and target specific areas or individuals for intervention. This can aid in designing better support systems and preventive measures.
   ```python
   import pandas as pd

   # Sample data
   data = {'comment': ["Your cross-dressing is disgusting!", "You look great today!", "Stop being yourself."],
           'sentiment': [analyze_sentiment("Your cross-dressing is disgusting!"),
                         analyze_sentiment("You look great today!"),
                         analyze_sentiment("Stop being yourself.")]}
   df = pd.DataFrame(data)
   print(df)
   ```python
 3. **Promoting Positive Engagement**:
    Positive sentiment analysis can highlight supportive interactions and encourage a more inclusive environment. By rewarding positive comments, social media platforms can foster a supportive online space.
    ```python
    positive_comments = df[df['sentiment'] == 'Positive']
    print(positive_comments)
    ```python

## Installation

1. **Install Required Libraries**

    ```bash
    pip install pandas scikit-learn nltk keras matplotlib wordcloud
    ```

2. **Download Dataset**: Obtain a dataset with text and sentiment labels.

3. **Set Up Environment**: Ensure all dependencies are installed.

## Usage

1. **Prepare Data**: Load and preprocess text data.

2. **Feature Extraction**: Convert text to features using TF-IDF.

3. **Train and Evaluate Model**: Train a model and assess its performance.

4. **Visualize Results**: Generate visualizations like Word Clouds.

This project demonstrates an end-to-end sentiment analysis pipeline from data collection to visualization, providing valuable insights into text data.
