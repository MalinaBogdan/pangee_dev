<template>
  <div class="media-page">
    <div class="top-string">
      <div class="upload">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M8.24993 5.25007L17.9999 5.25007C18.1988 5.25007 18.3896 5.32909 18.5303 5.46974C18.6709 5.61039 18.7499 5.80116 18.7499 6.00007L18.7499 15.7501C18.7499 15.949 18.6709 16.1397 18.5303 16.2804C18.3896 16.4211 18.1988 16.5001 17.9999 16.5001C17.801 16.5001 17.6103 16.4211 17.4696 16.2804C17.3289 16.1397 17.2499 15.949 17.2499 15.7501L17.2499 7.81038L6.53055 18.5307C6.38982 18.6714 6.19895 18.7505 5.99993 18.7505C5.80091 18.7505 5.61003 18.6714 5.4693 18.5307C5.32857 18.39 5.24951 18.1991 5.24951 18.0001C5.24951 17.801 5.32857 17.6102 5.4693 17.4694L16.1896 6.75007L8.24993 6.75007C8.05102 6.75007 7.86025 6.67105 7.7196 6.5304C7.57895 6.38975 7.49993 6.19898 7.49993 6.00007C7.49993 5.80116 7.57895 5.61039 7.7196 5.46974C7.86025 5.32909 8.05102 5.25007 8.24993 5.25007Z"
            fill="#343330"
          />
        </svg>

        Upload Media
      </div>
      <div class="search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
        >
          <path
            d="M11.9168 11.9168L10.8335 10.8335M11.3752 6.22933C11.3752 9.07129 9.07129 11.3752 6.22933 11.3752C3.38736 11.3752 1.0835 9.07129 1.0835 6.22933C1.0835 3.38736 3.38736 1.0835 6.22933 1.0835C9.07129 1.0835 11.3752 3.38736 11.3752 6.22933Z"
            stroke="#4C4C4C"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <input type="text" placeholder="Search and Filter" />
      </div>
    </div>

    <div class="content">
      <div class="left">
        <div class="menu">
          <div class="title">
            <div class="block"></div>
            Quick Menu
          </div>
          <div class="item">Campaign ></div>
          <div class="item">Publishers</div>
          <div class="item">Performance</div>
          <div class="item">Products</div>
          <div class="item">Media</div>
          <div class="separator"></div>
        </div>

        <div class="filter">
          <div class="title">Media Filter</div>
          <div class="search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="24"
              viewBox="0 0 28 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.9 14H17.0047L16.6873 13.73C17.798 12.59 18.4667 11.11 18.4667 9.5C18.4667 5.91 15.1687 3 11.1 3C7.03134 3 3.73334 5.91 3.73334 9.5C3.73334 13.09 7.03134 16 11.1 16C12.9247 16 14.602 15.41 15.894 14.43L16.2 14.71V15.5L21.8667 20.49L23.5553 19L17.9 14ZM11.1 14C8.278 14 6 11.99 6 9.5C6 7.01 8.278 5 11.1 5C13.922 5 16.2 7.01 16.2 9.5C16.2 11.99 13.922 14 11.1 14Z"
                fill="#84818A"
              />
            </svg>
            <input type="text" placeholder="Search" />
          </div>

          <div class="select">
            <label for="">Sort by</label>
            <select name="" id="">
              <option>А</option>
              <option>Б</option>
              <option>В</option>
            </select>
          </div>
          <div class="select">
            <label for="Media Used">Media Used</label>
            <select name="Media Used" id="">
              <option>А</option>
              <option>Б</option>
              <option>В</option>
            </select>
          </div>
          <div class="select">
            <label for="Media Type">Media Type</label>
            <select name="Media Type" id="">
              <option>А</option>
              <option>Б</option>
              <option>В</option>
            </select>
          </div>
          <div class="select">
            <label for="Time Uploaded">Time Uploaded</label>
            <select name="Time Uploaded" id="">
              <option>А</option>
              <option>Б</option>
              <option>В</option>
            </select>
          </div>
          <div class="system-labels">
            <div class="title">
              System Labels
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="20"
                viewBox="0 0 24 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.7333 15H13V9H10.7333V15ZM11.8667 0C5.61066 0 0.533325 4.48 0.533325 10C0.533325 15.52 5.61066 20 11.8667 20C18.1227 20 23.2 15.52 23.2 10C23.2 4.48 18.1227 0 11.8667 0ZM11.8667 18C6.86866 18 2.79999 14.41 2.79999 10C2.79999 5.59 6.86866 2 11.8667 2C16.8647 2 20.9333 5.59 20.9333 10C20.9333 14.41 16.8647 18 11.8667 18ZM10.7333 7H13V5H10.7333V7Z"
                  fill="#84818A"
                />
              </svg>
            </div>

            <div class="system-label">
              <div class="color purple"></div>
              <div class="text">
                <div class="name">Spring 2024</div>
                <div class="value">8</div>
              </div>
            </div>
            <div class="system-label">
              <div class="color orange"></div>
              <div class="text">
                <div class="name">Creative Team</div>
                <div class="value">8</div>
              </div>
            </div>
            <div class="system-label">
              <div class="color red"></div>
              <div class="text">
                <div class="name">References</div>
                <div class="value">8</div>
              </div>
            </div>
            <div class="system-label">
              <div class="color blue"></div>
              <div class="text">
                <div class="name">Insights</div>
                <div class="value">8</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="media-content">
          <div class="title">Media: Campaign Name | Spring | 2024</div>
          <div class="table">
            <div class="headers">
              <div class="name">Media Name</div>
              <div class="label">Label</div>
              <div class="date">Date added</div>
              <div class="size">FIle size</div>
            </div>
            <div class="row">
              <div class="img">
                <img
                  src="https://images.hellomagazine.com/horizon/landscape/6527db87ef07-rafael-nadal-smiling.jpg"
                  alt=""
                />
              </div>
              <div class="name">Rafael Nadal</div>
              <div class="label">
                <div class="color purple"></div>
                <div class="text">Spring 2024</div>
              </div>
              <div class="date">05 Jan 2021</div>
              <div class="size">1.2 Mb</div>
            </div>
            <div class="row">
              <div class="img">
                <img
                  src="https://images.hellomagazine.com/horizon/landscape/6527db87ef07-rafael-nadal-smiling.jpg"
                  alt=""
                />
              </div>
              <div class="name">Rafael Nadal</div>
              <div class="label">
                <div class="color purple"></div>
                <div class="text">Spring 2024</div>
              </div>
              <div class="date">05 Jan 2021</div>
              <div class="size">1.2 Mb</div>
            </div>
            <div class="row">
              <div class="img">
                <img
                  src="https://images.hellomagazine.com/horizon/landscape/6527db87ef07-rafael-nadal-smiling.jpg"
                  alt=""
                />
              </div>
              <div class="name">Rafael Nadal</div>
              <div class="label">
                <div class="color purple"></div>
                <div class="text">Spring 2024</div>
              </div>
              <div class="date">05 Jan 2021</div>
              <div class="size">1.2 Mb</div>
            </div>
            <div class="row">
              <div class="img">
                <img
                  src="https://images.hellomagazine.com/horizon/landscape/6527db87ef07-rafael-nadal-smiling.jpg"
                  alt=""
                />
              </div>
              <div class="name">Rafael Nadal</div>
              <div class="label">
                <div class="color purple"></div>
                <div class="text">Spring 2024</div>
              </div>
              <div class="date">05 Jan 2021</div>
              <div class="size">1.2 Mb</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(async () => {});
</script>

<style></style>
