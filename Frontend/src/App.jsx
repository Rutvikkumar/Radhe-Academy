import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "./components/ui/button";
import Navbar from "./component/Navbar";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Award,
  BookOpen,
  Code,
  Database,
  Cpu,
  PenTool,
} from "lucide-react";
import InstructorCard from "@/component/InstructorCard.jsx"
import "./App.css";

function App() {
  const courses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      description:
        "Learn HTML, CSS, and JavaScript to build responsive websites from scratch.",
      duration: "8 weeks",
      icon: <Code className="h-8 w-8 mb-2 text-primary" />,
    },
    {
      id: 2,
      title: "Python Programming",
      description:
        "Master Python programming for automation, data analysis, and software development.",
      duration: "10 weeks",
      icon: <BookOpen className="h-8 w-8 mb-2 text-primary" />,
    },
    {
      id: 3,
      title: "Database Management",
      description:
        "Learn SQL and database design principles to manage and query data effectively.",
      duration: "6 weeks",
      icon: <Database className="h-8 w-8 mb-2 text-primary" />,
    },
    {
      id: 4,
      title: "Computer Hardware & Networking",
      description:
        "Understand computer components, troubleshooting, and network configuration.",
      duration: "8 weeks",
      icon: <Cpu className="h-8 w-8 mb-2 text-primary" />,
    },
    {
      id: 5,
      title: "UI/UX Design",
      description:
        "Learn design principles, wireframing, prototyping, and user experience optimization.",
      duration: "10 weeks",
      icon: <PenTool className="h-8 w-8 mb-2 text-primary" />,
    },
  ];
  const instructors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Lead Instructor, Web Development",
      bio: "Ph.D. in Computer Science with 10+ years of industry experience at major tech companies. Specializes in modern web technologies and frameworks.",
      image: "../public/profile.jpg",
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      role: "Senior Instructor, Programming",
      bio: "Former software architect with 15+ years experience developing enterprise applications. Master's in Software Engineering and certified in multiple programming languages.",
      image: "../public/profile.jpg",
    },
  ];
  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* Header Section */}
        <Navbar></Navbar>
        {/* About Section */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              About Our Academy
            </h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg mb-6">
                TechPro Academy is a premier institution dedicated to providing
                hands-on, practical computer education. Founded in 2015, we've
                helped over 5,000 students launch successful careers in
                technology.
              </p>
              <p className="text-lg mb-6">
                Our industry-experienced instructors bring real-world knowledge
                into the classroom, ensuring students learn relevant skills that
                employers are actively seeking.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">5K+</div>
                  <div className="text-sm mt-1">Students Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">15+</div>
                  <div className="text-sm mt-1">Professional Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">92%</div>
                  <div className="text-sm mt-1">Placement Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">20+</div>
                  <div className="text-sm mt-1">Industry Partners</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Our Courses
            </h2>
            <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
              Choose from our range of comprehensive courses designed to equip
              you with in-demand tech skills. All courses include hands-on
              projects, industry case studies, and personalized feedback.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Card key={course.id} className="h-full flex flex-col">
                  <CardHeader>
                    <div className="flex justify-center">{course.icon}</div>
                    <CardTitle className="text-xl text-center">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-center">
                      Duration: {course.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p>{course.description}</p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button className="w-full">Learn More</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Instructors Section */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Meet Our Instructors
            </h2>
            <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
              Our instructors are industry professionals with years of practical
              experience and a passion for teaching the next generation of tech
              talent.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {instructors.map((instructor) => (
                <Card
                  key={instructor.id}
                  className="flex flex-col md:flex-row overflow-hidden"
                >
                  <div className="md:w-1/3">
                    <img
                      src={instructor.image}
                      alt={instructor.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <CardHeader>
                      <CardTitle>{instructor.name}</CardTitle>
                      <CardDescription>{instructor.role}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>{instructor.bio}</p>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Contact Us
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-primary" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-primary" />
                    <span>info@techproacademy.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-primary" />
                    <span>123 Tech Street, Silicon Valley, CA 94025</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mt-8 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon">
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Twitter className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Your Name" />
                  </div>
                  <div>
                    <Input placeholder="Your Email" type="email" />
                  </div>
                  <div>
                    <Input placeholder="Subject" />
                  </div>
                  <div>
                    <textarea
                      className="flex min-h-32 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your Message"
                    />
                  </div>
                  <div>
                    <Button className="w-full">Send Message</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Our Location
            </h2>

            <div className="max-w-4xl mx-auto">
              {/* Placeholder for Google Maps */}
              <div className="bg-gray-300 h-64 md:h-96 w-full rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 mx-auto text-gray-600" />
                  <p className="mt-2 text-gray-700">
                    TechPro Academy
                    <br />
                    123 Tech Street
                    <br />
                    Silicon Valley, CA 94025
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="mb-4">
                  Conveniently located in the heart of Silicon Valley, our
                  campus is easily accessible by public transportation and has
                  ample parking for students and visitors.
                </p>
                <Button variant="outline">Get Directions</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">TechPro Academy</h3>
                <p className="text-sm text-gray-300">
                  Empowering students with practical skills for successful tech
                  careers since 2015.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>About Us</li>
                  <li>Courses</li>
                  <li>Instructors</li>
                  <li>Contact</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    +1 (555) 123-4567
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    info@techproacademy.com
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    123 Tech Street, Silicon Valley
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
                <p className="text-sm text-gray-300 mb-2">
                  Stay updated with our latest courses and events.
                </p>
                <div className="flex">
                  <Input placeholder="Your Email" className="rounded-r-none" />
                  <Button className="rounded-l-none">Subscribe</Button>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center text-gray-400">
              © {new Date().getFullYear()} TechPro Academy. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
