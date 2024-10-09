import { TweetItem } from "@/components/tweet/tweet-item"
import { tweet } from "@/data/tweet"

export const HomeFeed = () => {
   return(
      <div className="">
         <TweetItem tweet={ tweet } />
         <TweetItem tweet={ tweet } />
         <TweetItem tweet={ tweet } />
         <TweetItem tweet={ tweet } />
      </div>
   )
}