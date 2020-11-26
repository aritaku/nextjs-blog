import React from 'react'
import { TwitterShareButton, TwitterIcon } from 'react-share'
import urlJoin from 'url-join'
import { siteConfig } from '../lib/siteConfig'

const config = {
  via: 'aritaku03',
  size: 32
}

interface SocialProps {
  postPath: string
  title: string
  size?: number
  via?: string
}

export default class Share extends React.Component<SocialProps, {}> {
  shouldComponentUpdate() {
    return false
  }
  render() {
    const url = urlJoin(siteConfig.siteUrl, this.props.postPath)
    return (
      <div className="social-buttons">
        <h2 className="title">SNSシェア</h2>
        <div className="buttons">
          <TwitterShareButton url={url} title={this.props.title} via={this.props.via ? this.props.via : config.via}>
              <TwitterIcon size={this.props.size ? this.props.size : config.size} round />
          </TwitterShareButton>
        </div>
      </div>
    )
  }
}