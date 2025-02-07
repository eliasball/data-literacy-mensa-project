library(ggplot2)

df <- read.csv("D:\\data-literacy-mensa-project\\data-markov\\markov_metrics_long.csv", sep=",", header=TRUE)

ggplot(data=df, aes(x = `Simulations`, y = `Metric`, group = `Model`, colour=`Model`)) +
  geom_line() +
  geom_point(size=2.5) +
  xlab("Number of Simulations") +
  ylab("Combined Mass in Cashier States") + 
  scale_x_continuous(breaks=c(3,4,5,6,7,8,9,10), minor_breaks = NULL) +
  theme_minimal() +
  theme(axis.title=element_text(size=16),
        legend.title=element_text(size=18),
        legend.text=element_text(size=14))
  
ggsave("D:\\data-literacy-mensa-project\\figures\\markov-metric.png",
       dpi=800,
       scale=1)