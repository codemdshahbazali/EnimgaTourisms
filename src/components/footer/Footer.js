import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <section class="social">
        <div class="container text-center">
          <ul>
            <li>
              <a href="https://www.youtube.com/results?search_query=devsnest">
                <img src="https://img.icons8.com/color/48/000000/youtube-play.png" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbmNYblV6V2tGVDJzM2JGT3pnSmhNaWhsZ08zd3xBQ3Jtc0tteU1UbkZKU2VlcURQNm45Qzh6R0xDU003SHByVmg3UThaczJTN1dpME53R1F4dW0ydFNJYUxaSkNicEsxenJHRnNNcWJ0NWdxVkxfbUFoMUJ4amJMWExYd2dKdnhBbnZaRm5sNV9zUXgyOVRPX0llWQ&q=https%3A%2F%2Ftwitter.com%2Fdevsnest_%3Fs%3D09">
                <img src="https://img.icons8.com/fluent/48/000000/twitter.png" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa2NHTW1ZNS1sd3RBYlVYZTU3MFZSbDNOSUlTZ3xBQ3Jtc0trc0Y3aFJHT0h4VVFSZHhXWXpOTXBmcHhpajMtcUJjbmVSWF96NlVOUmVfRWY3OEVNaTc2cE1BakQwYlZpNWRhSmVQZW5EMjVUVEl3cG0tZ3FXVElhNHMxeFQzUlNqMTMxMmZnVGNWZ3FhXzl2bk9TRQ&q=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fdevsnest">
                <img src="https://img.icons8.com/color/48/000000/linkedin.png" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="https://img.icons8.com/fluent/48/000000/discord-new-logo.png" />
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section class="footer">
        <div class="container-footer">
          <p>
            All rights are reserved, Designed by <a href="#">Team Enigma</a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Footer;
