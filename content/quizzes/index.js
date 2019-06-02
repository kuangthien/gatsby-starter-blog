import React from 'react'
import Layout from '../../components/Layout'
import QuizList from './../../components/QuizList'
import { Link, graphql, StaticQuery } from 'gatsby'

const QuizListIndexPage = props => {
  const { data } = props
  const { edges: quizzes } = data.allMarkdownRemark
  const stored = quizzes.reduce(function(pV, cV) {
    const { fields, frontmatter } = cV.node
    pV.push({
      id: fields.slug,
      title: frontmatter.title,
      desc: frontmatter.description,
      image: frontmatter.featuredimage,
      renderLink: props => <Link to={`${fields.slug}`} {...props} />,
    })
    return pV
  }, [])

  // console.log('stored', stored)
  return (
    <Layout>
      <QuizList quizzes={stored} />
    </Layout>
  )
}

export default () => {
  return <div>List </div>
}

