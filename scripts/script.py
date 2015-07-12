import csv
import os

def main():

    with open('SinhalaWebesponses1.csv', 'rb') as csvfile:
        spamreader = csv.reader(csvfile, delimiter=',', quotechar='"')
        for row in spamreader:
            print row[1]

            with open("../_posts/2015-07-09-"+row[1].replace(" ","-")+".md", "w") as myfile:
                myfile.write("layout: default\ntitle: "+row[1]+"\nlink: "+row[2]+"\ndesc:\""+row[7]+"\"\ncategories:\n- "+row[6]+"\ntags:\n- "+row[8]+"\n---")

if __name__ == '__main__':
    main()


