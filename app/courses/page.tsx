import Approach from "@/Component/courses/Approach";
import CoursesHero from "@/Component/courses/CourseHero";
import FeaturedCourses from "@/Component/courses/FeaturedCourses";
import NewsletterCTA from "@/Component/Home/NewsletterCTA";
export default function Courses() {
  return (
    <>
    <CoursesHero />

    <FeaturedCourses />
    <Approach />
    <NewsletterCTA />
    </>
  );
}
