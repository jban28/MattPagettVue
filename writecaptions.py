caption_file = open("flowers_captions.txt", "r")
caption_list = caption_file.readlines()
new_captions = open("new_captions.txt", "a")
i = 0
while i <= len(caption_list):
  new_captions.write("\"" + str(i+1) + "A\": {next: \"" + str(i+1) + "B\", last: \"" +  str(i) + "C\", caption: \"" + caption_list[3*i][:-1] + "\"},\n")
  new_captions.write("\"" + str(i+1) + "B\": {next: \"" + str(i+1) + "C\", last: \"" +  str(i+1) + "A\", caption: \"" + caption_list[3*i+1][:-1] + "\"},\n")
  new_captions.write("\"" + str(i+1) + "C\": {next: \"" + str(i+2) + "A\", last: \"" +  str(i+1) + "B\", caption: \"" + caption_list[3*i+2][:-1] + "\"},\n")
  i += 1