# bitless

## Asset pipeline

```  
npm install
bower install
grunt build
grunt copy
```

## Write in blogpost:
```
nanoc new-blog -h
NAME
    new-blog - creates a new blog post

USAGE
    nanoc new-blog name [options]

DESCRIPTION
    This command creates a new blog post under
    content/blog/{year}/{month}/example.html. You can additionally pass in
    the description, the tags and the creation date.

OPTIONS
    -c --created_at     creation date for this blog post (ex. "2013-01-03 10:24")
    -d --description    description for this blog post (ex. "This is a description")
    -h --help           show help for this command
    -t --tags           tags for this blog post (ex. "these,are,tags")

OPTIONS FOR NANOC
    -C --no-color       disable color
    -V --verbose        make nanoc output more detailed
    -d --debug          enable debugging
    -h --help           show the help message and quit
    -l --color          enable color
    -v --version        show version information and quit
    -w --warn           enable warnings

1.9.3-p327 in bitless/ on master
› nanoc new-blog "This is a blogpost"
Creating new post: content/blog/2014/06/this-is-a-blogpost.html
```

## In the folder to compile:

    bundle exec guard

or

    nanoc compile

## Deploy:

    nanoc deploy --target default
